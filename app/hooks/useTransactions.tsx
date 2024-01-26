// useTransactions.ts

import { useEffect } from 'react';
import { useStore } from '../store/useStore';
import {
  getEqualContribution,
  getDebtsAndCredits,
  generateTransactions,
} from '@/app/utils/transactionsUtils';

const useTransactions = () => {
  const {
    participants,
    totalExpenses,
    setTransactions,
    transactions,
  } = useStore();

  useEffect(() => {
    const equalContribution = getEqualContribution(
      totalExpenses,
      participants.length
    );
    const debtsAndCredits = getDebtsAndCredits(
      participants,
      equalContribution
    );
    generateTransactions(debtsAndCredits, setTransactions);
  }, [participants, setTransactions, totalExpenses]);

  return transactions;
};

export default useTransactions;
