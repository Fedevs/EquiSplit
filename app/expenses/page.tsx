'use client';

import Link from 'next/link';
import ParticipantsMoneyForm from '../components/ParticipantsMoneyForm';
import {
  participantType,
  transactionType,
  useStore,
} from '../store/useStore';

export default function Expenses() {
  const {
    participants,
    totalExpenses,
    setTransactions,
    transactions,
  } = useStore();

  const getEqualContribution = (): number => {
    return totalExpenses / participants.length;
  };

  const getDebtsAndCredits = (
    equalContribution: number
  ): participantType[] => {
    return participants.map((participant) => ({
      ...participant,
      balance: participant.contribution - equalContribution,
    }));
  };

  const generateTransactions = (
    debtsAndCredits: participantType[]
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

  const calculateTransactions = () => {
    const equalContribution = getEqualContribution();
    const debtsAndCredits = getDebtsAndCredits(
      equalContribution
    );
    generateTransactions(debtsAndCredits);
  };

  return (
    <section>
      <ParticipantsMoneyForm />
      <div className='flex'>
        <button onClick={calculateTransactions}>
          Calculate
        </button>

        <button>
          <Link href='/participants'>back</Link>
        </button>
      </div>
      {/* {transactions.map((el, index) => (
        <div key={index}>{el}</div>
      ))} */}
    </section>
  );
}
