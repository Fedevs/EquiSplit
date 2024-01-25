'use client';
import { useStore } from '../store/useStore';

export default function Expenses() {
  const { totalExpenses, setTotalExpenses } = useStore();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const inputValue = parseFloat(e.target.value);
    setTotalExpenses(inputValue);
  };

  const handleSubmit = (
    e: React.FormEvent<HTMLFormElement>
  ) => {};

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <label htmlFor='totalExpenses'>
          Total expenses
        </label>
        <input
          type='number'
          id='totalExpenses'
          value={totalExpenses}
          required
          min={0}
          onChange={handleChange}
        />
      </form>
    </section>
  );
}
