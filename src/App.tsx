import { GlobalStyle } from "./styles/global";
import {Header} from './components/Header'
import { Dashboard } from "./components/Dashboard";
import React, { useState } from "react";
import { NewTransactionModal } from "./components/NewTransactionModal";


export function App() {

  const [isNewTransactionOpen, setIsNewTransactionOpen] = useState(false)

  const handleOpenNewTransactionModal = () =>{
      setIsNewTransactionOpen(true)
  }

  const handleCloseNewTransactionModal = () =>{
      setIsNewTransactionOpen(false)
  }
  return (
    <React.Fragment>
      <GlobalStyle />
      <Header 
        onOpenNewTransactionModal={handleOpenNewTransactionModal}
      />
      <Dashboard />
      <NewTransactionModal
        isOpen={isNewTransactionOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />
    </React.Fragment>
  );
}