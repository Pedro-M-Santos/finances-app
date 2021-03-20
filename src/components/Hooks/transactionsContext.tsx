import React, {createContext, ReactNode, useContext, useEffect, useState} from 'react'
import {api} from '../../services/api'

interface TransactionsProviderProps{
    children: ReactNode
}

interface Transaction{
    id: number
    title: string
    amount: number
    type: 'deposit'|'withdraw'
    category: string
    createdAt: string
}

type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>

interface TransactionsContextData{
    transactions:  Transaction[]
    createTransaction: (Transaction: TransactionInput) => Promise<void>
}

const TransactionsContext = createContext<TransactionsContextData>(
{} as TransactionsContextData)

export function TransactionsProvider({children}:TransactionsProviderProps){
    const [transactions,setTransactions] = useState<Transaction[]>([])
    useEffect(() => {
        api.get('http://localhost:3000/api/transactions')
        .then(response=>setTransactions(response.data.transactions))
    }, [])

    async function createTransaction(transaction:TransactionInput){
        try{
            const response = await api.post('/transactions',{
                ...transaction,
                createdAt: new Date()
            })
            setTransactions([...transactions,response.data.transaction])
        }
        catch(error){
            console.error(error)
        }
    }

    return(
        <TransactionsContext.Provider
            value={{
                transactions,
                createTransaction
            }}
        >
            {children}
        </TransactionsContext.Provider>
    )
}

export function useTransactions(){
    const context = useContext(TransactionsContext)
    return context
}