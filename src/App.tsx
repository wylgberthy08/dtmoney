import {Dashboard} from "./components/Dashboard";
import {Header} from "./components/Header";
import {GlobalStyle} from "./styles/global";
import Modal from 'react-modal'
import {useState} from "react";
import {NewTransactionModal} from "./components/NewTransactionModal";
import { TransactionsProvider } from "./hooks/useTransactions";

Modal.setAppElement('#root');

export function App() {
  const [isNewTransactionOpenModal, setIsNewTransactionOpenModal] = useState(false);
  
  function handleOpenNewTransaction() {
    setIsNewTransactionOpenModal(true)
  }

  function handleCloseNewTransaction() {
    setIsNewTransactionOpenModal(false)
  }

  return (
    <TransactionsProvider>
      <Header onOpenNewTransactionModal={handleOpenNewTransaction} />
      <Dashboard />
      <NewTransactionModal
       isOpen={isNewTransactionOpenModal}
       onRequestClose={handleCloseNewTransaction}
        />
      
      <GlobalStyle />
    </TransactionsProvider>
  );
}


