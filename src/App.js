import { useReducer } from 'react';
import './App.css';
import { Balance } from './components/Balance';
import { IncomeExpenses } from './components/IncomeExpenses';
import { Transaction } from './components/Transaction';
import { TransactionList } from './components/TransactionList';
import { AppTransaction } from './components/AddTransaction';
import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <div className="Container">
      <Balance />
      <IncomeExpenses />
      <TransactionList />
      <AppTransaction />
    </div>
  );
}

export default App;
