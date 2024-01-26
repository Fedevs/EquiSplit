import useTransactions from '@/app/hooks/useTransactions';

const TransactionsComponent = () => {
  const transactions = useTransactions();

  return (
    <section>
      {transactions.map((transaction, index) => (
        <div key={index}>
          {transaction.from} owes {transaction.amount} to{' '}
          {transaction.to}
        </div>
      ))}
    </section>
  );
};

export default TransactionsComponent;
