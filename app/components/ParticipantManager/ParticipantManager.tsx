import { useRef, useState } from 'react';
import { useStore } from '@/app/store/useStore';
import ParticipantsList from '@/app/components/ParticipantsList/ParticipantsList';
import EmptyState from '../EmptyState/EmptyState';
import happyDachshund from '@/public/happy-dachshund.webp';
import Image from 'next/image';

export default function ParticipantManager() {
  const {
    participants,
    error,
    setError,
    addParticipant,
    totalExpenses,
  } = useStore();
  const [newName, setNewName] = useState<string>('');
  const inputRef = useRef<HTMLInputElement | null>(null);

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
      inputRef?.current?.focus();
    } else {
      setError(
        'A participant with the same name already exists. Consider using a nickname.'
      );
    }
  };

  return (
    <section
      data-testid='participant-manager'
      className='w-full flex flex-col items-center gap-3'
    >
      <div className='flex flex-col gap-2'>
        <div className='flex w-full items-center gap-3'>
          <label
            htmlFor='newName'
            className='font-bold text-center text-xl w-full'
          >
            Add participant
          </label>
          {participants.length > 1 && (
            <Image
              src={happyDachshund}
              alt='angry dachshund'
              width={40}
              height={60}
            />
          )}
        </div>
        <div className='flex flex-col justify-center gap-1 xs:flex-row'>
          <input
            type='text'
            ref={inputRef}
            id='newName'
            name='newName'
            value={newName}
            maxLength={10}
            onChange={handleChange}
            onKeyDown={(e) =>
              e.key === 'Enter' &&
              handleAddParticipantClick()
            }
            className='border border-gray-300 p-2 rounded'
          />
          <button
            type='button'
            onClick={handleAddParticipantClick}
            className='transition duration-300 ease text-white bg-blue-500 hover:bg-gray-700 rounded-lg text-sm px-5 py-2.5'
          >
            ADD
          </button>
        </div>
      </div>

      {error && (
        <div className='text-red-500 font-bold my-2 text-center'>
          {error}
        </div>
      )}
      {participants.length > 1 && (
        <div className='flex my-5 flex justify-end items-center w-full'>
          <div className='border py-2 px-4 rounded shadow-md'>
            Total:&nbsp;
            <span className='font-bold text-red-500 text-lg'>
              {totalExpenses.toFixed(2)}
            </span>
          </div>
        </div>
      )}

      <ParticipantsList />
      {participants.length < 2 && <EmptyState />}
    </section>
  );
}
