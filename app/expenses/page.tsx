'use client';
import { useParticipantsStore } from '../store/useParticipants';

export default function Expenses() {
  const { participants } = useParticipantsStore();

  return <div>{participants[0]?.name}</div>;
}
