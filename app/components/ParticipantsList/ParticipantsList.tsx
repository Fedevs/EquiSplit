import { useStore } from '@/app/store/useStore';

export default function ParticipantsList() {
  const {
    participants,
    updateContribution,
    setTotalExpenses,
    totalExpenses,
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
    <div className='w-full flex flex-col gap-3 px-1'>
      <div
        className='flex my-5 justify-center'
        data-testid='participants-list'
      >
        Total:&nbsp;<b>{totalExpenses.toFixed(2)}</b>
      </div>
      <form className='flex flex-col gap-3'>
        {participants.map(({ name, contribution }) => (
          <div
            key={name}
            className='flex rounded transition-shadow duration-300 ease-in-out shadow-md hover:shadow-lg focus:shadow-outline active:shadow-xl flex-col p-2 items-center rounded gap-2 sm:flex-row sm:items-center sm:justify-between'
          >
            <span>{name}&apos;s contribution</span>
            <input
              type='number'
              value={contribution >= 0 ? contribution : ''}
              min={0}
              className='border border-gray-300 p-2 rounded w-full sm:w-[215px]'
              onChange={(e) =>
                handleContributionChange(
                  name,
                  e.target.value
                )
              }
            />
          </div>
        ))}
      </form>
    </div>
  );
}
