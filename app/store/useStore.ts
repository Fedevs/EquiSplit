import { create } from 'zustand';

type participant = { name: string; contribution: number };

interface StoreState {
  participants: participant[];
  addParticipant: (name: string) => void;
  updateContribution: (
    name: string,
    contribution: number
  ) => void;
}

export const useStore = create<StoreState>((set) => ({
  participants: [],
  addParticipant: (name: string) =>
    set((state) => ({
      participants: [
        ...state.participants,
        { name, contribution: 0 },
      ],
    })),
  updateContribution: (name, contribution) =>
    set((state) => ({
      participants: state.participants.map((participant) =>
        participant.name === name
          ? { ...participant, contribution }
          : participant
      ),
    })),
}));
