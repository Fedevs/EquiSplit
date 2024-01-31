import { useRef, useState } from 'react';
import { useStore } from '@/app/store/useStore';
import ParticipantsList from '@/app/components/ParticipantsList/ParticipantsList';

export default function ParticipantManager() {
  const { participants, addParticipant } = useStore();
  const [newName, setNewName] = useState<string>('');
  const [error, setError] = useState<string>('');
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
      className='w-full flex flex-col items-center'
    >
      <div className='flex flex-col items-center w-full gap-3'>
        <label htmlFor='newName' className='font-bold'>
          Add participant
        </label>
        <div className='flex justify-between gap-1'>
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
            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out'
          >
            Add
          </button>
        </div>
      </div>

      <ParticipantsList />

      {error && (
        <div className='text-red-500 mt-2'>{error}</div>
      )}
    </section>
  );
}
