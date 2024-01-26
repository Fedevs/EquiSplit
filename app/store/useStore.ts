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

export type setTransactionsType = (
  transactions: transactionType[]
) => void;

type State = {
  participants: participantType[];
  transactions: transactionType[];
  totalExpenses: number;
  activeStep: number;
};

type Actions = {
  addParticipant: (name: string) => void;
  setTotalExpenses: (value: number) => void;
  updateContribution: (
    name: string,
    contribution: number
  ) => void;
  setTransactions: setTransactionsType;
  setActiveStep: (step: number) => void;
  reset: () => void;
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

const initialState: State = {
  participants: initialParticipantsDATA,
  transactions: [],
  totalExpenses: initialExpenses,
  activeStep: 0,
};

export const useStore = create<State & Actions>()(
  (set, get) => ({
    ...initialState,
    addParticipant: (name: string) =>
      set({
        participants: [
          ...get().participants,
          { name, contribution: 0 },
        ],
      }),
    setTotalExpenses: (value: number) =>
      set({ totalExpenses: value }),
    updateContribution: (
      name: string,
      contribution: number
    ) =>
      set({
        participants: get().participants.map(
          (participant) =>
            participant.name === name
              ? { name: participant.name, contribution }
              : participant
        ),
      }),
    setTransactions: (transactions: transactionType[]) =>
      set({ transactions }),
    setActiveStep: (step: number) =>
      set({ activeStep: step }),
    reset: () => {
      set(initialState);
    },
  })
);
