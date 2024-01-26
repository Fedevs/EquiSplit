import { create } from 'zustand';

type participant = {
  name: string;
  contribution: number;
};

const initialParticipantsDATA: participant[] = [
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
  participants: participant[];
  totalExpenses: number;
  addParticipant: (name: string) => void;
  setTotalExpenses: (value: number) => void;
  updateContribution: (
    name: string,
    contribution: number
  ) => void;
}

export const useStore = create<StoreState>((set) => ({
  participants: initialParticipantsDATA,
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
    set((state) => {
      console.log(
        'Updating contribution for',
        name,
        'to',
        contribution
      );
      return {
        participants: state.participants.map(
          (participant) =>
            participant.name === name
              ? { ...participant, contribution }
              : participant
        ),
      };
    }),
}));
