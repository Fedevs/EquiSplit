'use client';
import { useEffect, useRef, useState } from 'react';
import { useStore } from '@/app/store/useStore';
import ParticipantsList from '@/app/components/ParticipantsList/ParticipantsList';

export default function ParticipantManager() {
  const { participants, addParticipant } = useStore();
  const [newName, setNewName] = useState<string>('');
  const [error, setError] = useState<string>('');
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    inputRef?.current?.focus();
  }, [participants]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setNewName(e.target.value);
  };

  const isUniqueName = (name: string) => {
    return !participants.some(
      (participant) =>
        participant.name.toLowerCase().trim() ===
        name.toLowerCase().trim()
    );
  };

  const handleAddParticipantClick = () => {
    setError('');
    if (!newName.trim()) {
      setError('Please enter a valid participant name.');
    } else if (isUniqueName(newName)) {
      addParticipant(newName);
      setNewName('');
    } else {
      setError(
        'A participant with the same name already exists. Consider using a nickname.'
      );
    }
  };

  return (
    <section data-testid='participant-manager'>
      <label htmlFor='newName'>Add participant: </label>
      <input
        type='text'
        ref={inputRef}
        id='newName'
        name='newName'
        value={newName}
        onChange={handleChange}
        onKeyDown={(e) =>
          e.key === 'Enter' && handleAddParticipantClick()
        }
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
