'use client';

import Link from 'next/link';
import ParticipantsMoneyForm from '../components/ParticipantsMoneyForm';

export default function Expenses() {
  const handleConfirm = () => {};

  return (
    <section>
      <ParticipantsMoneyForm />
      <div className='flex'>
        <button onClick={handleConfirm}>Confirm</button>

        <button>
          <Link href='/participants'>back</Link>
        </button>
      </div>
    </section>
  );
}
