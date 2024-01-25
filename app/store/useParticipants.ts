import { create } from 'zustand';

type participant = { name: string; money: number };

interface ParticipantsStoreState {
  participants: participant[];
  addParticipant: (name: string) => void;
}

export const useParticipantsStore =
  create<ParticipantsStoreState>((set) => ({
    participants: [],
    addParticipant: (name: string) =>
      set((state) => ({
        participants: [
          ...state.participants,
          { name, money: 0 },
        ],
      })),
  }));
