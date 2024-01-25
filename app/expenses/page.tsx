'use client';
import Link from 'next/link';
import { useStore } from '../store/useStore';
import ParticipantsMoneyForm from '../components/ParticipantsMoneyForm';

export default function Expenses() {
  const {
    participants,
    totalExpenses,
    setTotalExpenses,
    updateMoney,
  } = useStore();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const inputValue = parseFloat(e.target.value);
    setTotalExpenses(inputValue);
  };

  return (
    <section>
      <label htmlFor='totalExpenses'>Total expenses</label>
      <input
        type='number'
        id='totalExpenses'
        value={totalExpenses}
        required
        onChange={handleChange}
      />
      <ParticipantsMoneyForm />
      <div>
        <button>
          <Link href='/participants'>back</Link>
        </button>
      </div>
    </section>
  );
}
