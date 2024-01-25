'use client';
import { useStore } from '../store/useStore';

export default function ParticipantsMoneyForm() {
  const { participants, updateMoney } = useStore();

  const handleMoneyChange = (
    name: string,
    newMoney: string
  ) => {
    const money = parseFloat(newMoney);
    updateMoney(name, money);
  };

  const handleSubmit = (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      {participants.map(({ name, money }) => (
        <div key={name}>
          Name: {name}, Money:
          <input
            type='number'
            value={money}
            onChange={(e) =>
              handleMoneyChange(name, e.target.value)
            }
          />
        </div>
      ))}
    </form>
  );
}
