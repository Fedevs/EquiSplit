import useTransactions from '@/app/hooks/useTransactions';

const TransactionsComponent = () => {
  const transactions = useTransactions();

  return (
    <section data-testid='transactions'>
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
