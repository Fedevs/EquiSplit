import { create } from 'zustand';

type participant = { name: string; money: number };

interface StoreState {
  participants: participant[];
  totalExpenses: number;
  addParticipant: (name: string) => void;
  setTotalExpenses: (value: number) => void;
  updateMoney: (name: string, newMoney: number) => void;
}

export const useStore = create<StoreState>((set) => ({
  participants: [],
  totalExpenses: 0,
  addParticipant: (name: string) =>
    set((state) => ({
      participants: [
        ...state.participants,
        { name, money: 0 },
      ],
    })),
  setTotalExpenses: (value: number) =>
    set({ totalExpenses: value }),
  updateMoney: (name, newMoney) =>
    set((state) => ({
      participants: state.participants.map((participant) =>
        participant.name === name
          ? { ...participant, money: newMoney }
          : participant
      ),
    })),
}));
