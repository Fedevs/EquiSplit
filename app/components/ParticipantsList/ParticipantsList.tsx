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
    const updatedParticipants = participants;
    return updatedParticipants.reduce(
      (accumulator, participant) =>
        (accumulator += participant.contribution),
      0
    );
  };

  return (
    <div>
      <div className='my-9' data-testid='participants-list'>
        TOTAL: {totalExpenses}
      </div>
      {participants.map(({ name, contribution }) => (
        <div key={name}>
          Name: <span>{name}</span>, Contribution:
          <input
            type='number'
            value={contribution > 0 ? contribution : ''}
            min={0}
            onChange={(e) =>
              handleContributionChange(name, e.target.value)
            }
          />
        </div>
      ))}
    </div>
  );
}
