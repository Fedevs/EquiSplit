import useTransactions from '@/app/hooks/useTransactions';

const TransactionsComponent = () => {
  const transactions = useTransactions();

  return (
    <section
      data-testid='transactions'
      className='flex flex-col gap-4 px-2'
    >
      {transactions.map((transaction, index) => (
        <div
          key={index}
          className='shadow rounded py-4 px-2'
        >
          {transaction.from} owes{' '}
          <span className='font-bold text-xl text-red-500'>
            {transaction.amount.toFixed(2)}{' '}
          </span>
          to {transaction.to}
        </div>
      ))}
    </section>
  );
};

export default TransactionsComponent;
