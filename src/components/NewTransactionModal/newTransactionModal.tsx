 import { Content, RadioBox, TransactionTypeContainer } from "./styles"
import Modal from 'react-modal'
import closeImg from '../../assets/close.svg'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import { FormEvent, useState } from "react"
import { useTransactions } from "../Hooks/transactionsContext"

Modal.setAppElement('#root')

interface NewTransactionModalProps{
    isOpen: boolean
    onRequestClose: () => void
}

export function NewTransactionModal({isOpen,onRequestClose}:NewTransactionModalProps) {
    const [title,setTitle] = useState('')
    const [amount,setAmount] = useState(0)
    const [type, setType] = useState <'deposit'|'withdraw'>('deposit')
    const [category,setCategory] = useState('')
    const {createTransaction} = useTransactions()

    async function handleCreateNewTransaction(event: FormEvent){
        event.preventDefault()
        const data ={
            title,
            amount,
            type,
            category
        }
        await createTransaction(data)
        setTitle('')
        setAmount(0)
        setCategory('')
        setType('withdraw')

        onRequestClose()


    }

    return (
    <Modal
    isOpen={isOpen}
    onRequestClose={onRequestClose}
    overlayClassName="react-modal-overlay"
    className="react-modal-content"
    >
        <button
            type="button"
            className="react-modal-close"
            onClick={onRequestClose}
        >
            <img src={closeImg} alt="fechar modal"/>
        </button>
        <Content>
            <h2>Cadastrar Transação</h2>
            <input 
                placeholder="Título"
                value={title}
                onChange={e=>setTitle(e.target.value)}
            />
            <input
                type="number" 
                placeholder="Valor"
                value={amount}
                onChange={e=>setAmount(parseFloat(e.target.value))}
            />
            <TransactionTypeContainer>
            <RadioBox
                type="button"
                activeColor='green'
                isActive={type==='deposit'}
                onClick={()=>setType('deposit')}
            >
                <img src={incomeImg} alt="income"/>
                <span>Entrada</span>
            </RadioBox>
            <RadioBox
                type="button"
                activeColor='red'
                isActive={type==='withdraw'}
                className={type=== 'deposit'?'active':''}
                onClick={()=>setType('withdraw')}
            >
                <img src={outcomeImg} alt="outcome"/>
                <span>Saída</span>
            </RadioBox>
            </TransactionTypeContainer>
            <input 
                placeholder="Categoria"
                value={category}
                onChange={e=>setCategory(e.target.value)}
            />
            <button
                type="submit"
                onClick={handleCreateNewTransaction}
            >
                Cadastrar
            </button>
        </Content>
    </Modal>
    )
}
