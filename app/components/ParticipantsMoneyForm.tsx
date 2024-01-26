'use client';

import { useStore } from '../store/useStore';

export default function ParticipantsMoneyForm() {
  const {
    participants,
    updateContribution,
    totalExpenses,
    setTotalExpenses,
  } = useStore();

  const handleContributionChange = (
    name: string,
    contribution: string
  ): void => {
    const value = parseFloat(contribution);
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

  const handleSubmit = (
    e: React.FormEvent<HTMLFormElement>
  ): void => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      {participants.map(({ name, contribution }) => (
        <div key={name}>
          Name: {name}, Contribution:
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

      <div>
        Total Expenses:
        {totalExpenses > 0 ? totalExpenses : 0}
      </div>
    </form>
  );
}
