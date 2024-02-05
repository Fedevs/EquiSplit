import useTransactions from '@/app/hooks/useTransactions';
import Image from 'next/image';
import superHappyDachshund from '@/public/super-happy-dachshund.webp';

import 'animate.css';

const TransactionsComponent = () => {
  const transactions = useTransactions();

  return (
    <section
      data-testid='transactions'
      className='flex flex-col gap-4 animate__animated animate__fadeIn'
    >
      {transactions.map((transaction, index) => (
        <div
          key={index}
          className='shadow rounded py-4 px-2 text-center'
        >
          {transaction.from} owes{' '}
          <span className='font-bold text-xl text-red-500'>
            {transaction.amount.toFixed(2)}{' '}
          </span>
          to {transaction.to}
        </div>
      ))}
      <div className='flex flex-col items-center'>
        <Image
          src={superHappyDachshund}
          alt='super happy dachshund'
          style={{
            width: '300px',
            height: 'auto',
          }}
          priority
          placeholder='blur'
        />
        <p className='text-2xl text-center font-bold'>
          Keylito is happy because your debts have been paid
          off.
        </p>
      </div>
    </section>
  );
};

export default TransactionsComponent;
