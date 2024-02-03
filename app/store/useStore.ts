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
  error: string | undefined;
};

type Actions = {
  addParticipant: (name: string) => void;
  removeParticipant: (name: string) => void;
  setTotalExpenses: (value: number) => void;
  updateContribution: (
    name: string,
    contribution: number
  ) => void;
  setTransactions: setTransactionsType;
  setActiveStep: (step: number) => void;
  setError: (error: string) => void;
  reset: () => void;
};

const initialState: State = {
  participants: [],
  transactions: [],
  totalExpenses: 0,
  activeStep: 0,
  error: '',
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
    removeParticipant: (name: string) =>
      set({
        participants: [
          ...get().participants.filter(
            (participant) => participant.name !== name
          ),
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
    setError: (error) => set({ error }),
    reset: () => {
      set(initialState);
    },
  })
);
