import { create } from 'zustand';

export type participantType = {
  name: string;
  contribution: number;
  balance?: number;
};

export type transactionType = {
  from: string;
  to: string;
  amount: number;
};

const initialParticipantsDATA: participantType[] = [
  { name: 'Fede', contribution: 600 },
  { name: 'Nadia', contribution: 800 },
  { name: 'Huw', contribution: 420 },
  { name: 'Euge', contribution: 500 },
  { name: 'Ivan', contribution: 300 },
];

const initialExpenses: number =
  initialParticipantsDATA.reduce(
    (acc, el) => acc + el.contribution,
    0
  );

interface StoreState {
  participants: participantType[];
  transactions: transactionType[];
  totalExpenses: number;
  setTransactions: (
    transactions: transactionType[]
  ) => void;
  addParticipant: (name: string) => void;
  setTotalExpenses: (value: number) => void;
  updateContribution: (
    name: string,
    contribution: number
  ) => void;
}

export const useStore = create<StoreState>((set) => ({
  participants: initialParticipantsDATA,
  transactions: [],
  totalExpenses: initialExpenses,
  addParticipant: (name: string) =>
    set((state) => ({
      participants: [
        ...state.participants,
        { name, contribution: 0 },
      ],
    })),
  setTotalExpenses: (value: number) =>
    set(() => ({ totalExpenses: value })),
  updateContribution: (name, contribution) =>
    set((state) => ({
      participants: state.participants.map((participant) =>
        participant.name === name
          ? { ...participant, contribution }
          : participant
      ),
    })),
  setTransactions: (transactions: transactionType[]) =>
    set(() => ({
      transactions: [...transactions],
    })),
}));
