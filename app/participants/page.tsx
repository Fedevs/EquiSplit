'use client';
import { useState } from 'react';
import { useParticipantsStore } from '../store/useParticipants';
import ParticipantsList from '../components/ParticipantsList';
import Link from 'next/link';

export default function Participants() {
  const { participants, addParticipant } =
    useParticipantsStore();
  const [newName, setNewName] = useState<string>('');
  const [error, setError] = useState<string>('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setNewName(e.target.value);
  };

  const handleSubmit = (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
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
      <form onSubmit={handleSubmit}>
        <label htmlFor='newName'>Add participant</label>
        <input
          type='text'
          id='newName'
          value={newName}
          onChange={handleChange}
        />
        <button type='submit'>Add</button>
      </form>
      {participants.map((participant, index) => (
        <ul key={`${participant.name}_${index}`}>
          <li>
            <ParticipantsList name={participant.name} />
          </li>
        </ul>
      ))}
      {error && <div>{error}</div>}
      <div>
        <button>
          <Link href='/expenses'>ADD MONEY</Link>
        </button>
      </div>
    </section>
  );
}
