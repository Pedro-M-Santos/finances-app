 import { Content, TransactionTypeContainer } from "./styles"
import Modal from 'react-modal'
import closeImg from '../../assets/close.svg'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'

Modal.setAppElement('#root')


interface NewTransactionModalProps{
    isOpen: boolean
    onRequestClose: () => void
}

export function NewTransactionModal({isOpen,onRequestClose}:NewTransactionModalProps) {
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
            />
            <input
                type="number" 
                placeholder="Valor"
            />
            <TransactionTypeContainer>
            <button
                type="button"
                className="income"
            >
                <img src={incomeImg} alt="income"/>
                <span>Entrada</span>
            </button>
            <button
                type="button"
                className="outcome"
            >
                <img src={outcomeImg} alt="outcome"/>
                <span>Saída</span>
            </button>
            </TransactionTypeContainer>
            <input 
                placeholder="Categoria"
            />
            <button
                type="submit"
                
            >
                Cadastrar
            </button>
        </Content>
    </Modal>
    )
}
