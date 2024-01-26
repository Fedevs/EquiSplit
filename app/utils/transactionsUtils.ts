import {
  participantType,
  setTransactionsType,
  transactionType,
} from '../store/useStore';

export const getEqualContribution = (
  totalExpenses: number,
  participantsNumber: number
): number => {
  return totalExpenses / participantsNumber;
};

export const getDebtsAndCredits = (
  participants: participantType[],
  equalContribution: number
): participantType[] => {
  return participants.map((participant) => ({
    ...participant,
    balance: participant.contribution - equalContribution,
  }));
};

export const generateTransactions = (
  debtsAndCredits: participantType[],
  setTransactions: setTransactionsType
): void => {
  const newTransactions: transactionType[] = [];

  debtsAndCredits.forEach((debtor) => {
    if (debtor.balance! < 0) {
      debtsAndCredits.forEach((creditor) => {
        if (debtor.name !== creditor.name) {
          const amountToTransfer = Math.min(
            Math.abs(debtor.balance!),
            creditor.balance!
          );

          if (amountToTransfer > 0) {
            newTransactions.push({
              from: debtor.name,
              to: creditor.name,
              amount: amountToTransfer,
            });

            debtor.balance! += amountToTransfer;
            creditor.balance! -= amountToTransfer;
          }
        }
      });
    }
  });

  setTransactions(newTransactions);
};
