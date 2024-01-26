'use client';

import { useStore } from '../store/useStore';

export default function ParticipantsMoneyForm() {
  const { participants, updateContribution } = useStore();

  const totalExpenses = participants.reduce(
    (accumulator, participants) =>
      accumulator + participants.contribution,
    0
  );

  const handleContributionChange = (
    name: string,
    contribution: string
  ) => {
    const value = parseFloat(contribution);
    updateContribution(name, value);
  };

  const handleSubmit = (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      {participants.map(({ name, contribution }) => (
        <div key={name}>
          Name: {name}, Contribution:
          <input
            type='number'
            value={contribution}
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
