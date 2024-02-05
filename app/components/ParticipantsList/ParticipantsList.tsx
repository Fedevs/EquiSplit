import { useStore } from '@/app/store/useStore';
import 'animate.css';

interface CloseButtonProps {
  onClick: () => void;
  styles: string;
}

function CloseButton({
  onClick,
  styles,
}: CloseButtonProps) {
  return (
    <button
      className={styles}
      role='button'
      aria-label='remove participant'
      onClick={onClick}
    >
      X
    </button>
  );
}

export default function ParticipantsList() {
  const {
    participants,
    removeParticipant,
    updateContribution,
    setTotalExpenses,
  } = useStore();

  const handleContributionChange = (
    name: string,
    contribution: string
  ): void => {
    const value =
      contribution === '' ? 0 : parseFloat(contribution);
    updateContribution(name, value);
    setTotalExpenses(calculateTotalExpenses());
  };

  const handleRemoveParticipant = (name: string) => {
    removeParticipant(name);
    setTotalExpenses(calculateTotalExpenses());
  };

  const calculateTotalExpenses = (): number => {
    const updatedParticipants =
      useStore.getState().participants;
    return updatedParticipants.reduce(
      (accumulator, participant) =>
        (accumulator += participant.contribution),
      0
    );
  };

  return (
    <div
      className='w-full flex flex-col gap-3 mt-5 rounded'
      data-testid='participants-list'
    >
      {participants.map(({ name, contribution }) => (
        <div
          key={name}
          className='flex flex-col items-center gap-2 p-2 text-center rounded transition-shadow duration-300 ease-in-out shadow-md hover:shadow-lg focus:shadow-outline xs:flex-row xs:justify-between xs:text-left animate__animated animate__fadeIn'
        >
          <div className='flex items-center w-full'>
            <span className='w-full'>
              {name}&apos;s contribution
            </span>
            <CloseButton
              styles='py-2 px-4 xs:hidden font-bold'
              onClick={() => handleRemoveParticipant(name)}
            />
          </div>
          <div className='flex justify-end w-full xs:w-80'>
            <input
              type='number'
              data-testid={`${name}_contribution`}
              value={contribution === 0 ? '' : contribution}
              min={0}
              className='border border-gray-300 p-2 rounded w-full xs:w-[150px] sm:w-[250px]'
              onChange={(e) =>
                handleContributionChange(
                  name,
                  e.target.value
                )
              }
            />
            <CloseButton
              styles='py-2 hidden xs:block px-4 font-bold'
              onClick={() => handleRemoveParticipant(name)}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
