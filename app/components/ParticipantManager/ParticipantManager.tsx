'use client';
import { useState } from 'react';
import { useStore } from '@/app/store/useStore';
import ParticipantsList from '@/app/components/ParticipantsList/ParticipantsList';

export default function ParticipantManager() {
  const { participants, addParticipant } = useStore();
  const [newName, setNewName] = useState<string>('');
  const [error, setError] = useState<string>('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setNewName(e.target.value);
  };

  const handleAddParticipantClick = () => {
    setError('');
    if (isUniqueName(newName)) addParticipant(newName);
    else {
      setError(
        'There is already a participant with the same name. If someone else shares the same name, consider using a nickname.'
      );
    }
  };

  const isUniqueName = (name: string) => {
    return !participants.some(
      (participant) =>
        participant.name.toLowerCase() ===
        name.toLowerCase()
    );
  };

  return (
    <section>
      <label htmlFor='newName'>Add participant</label>
      <input
        type='text'
        id='newName'
        value={newName}
        onChange={handleChange}
      />
      <button
        type='button'
        onClick={handleAddParticipantClick}
      >
        Add
      </button>

      <ParticipantsList />

      {error && <div>{error}</div>}
    </section>
  );
}
