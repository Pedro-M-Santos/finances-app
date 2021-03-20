import { useTransactions } from "../Hooks/transactionsContext";
import { Container } from "./styles";

export function TransactionsTable() {
    const {transactions} = useTransactions()

    return (
        <Container>
            <div className="header">
                <p>Título</p>
                <p>Valor</p>
                <p>Categoria</p>
                <p>Data</p>
            </div>
            <div className="table">
                {transactions.map((transaction)=>
                    <div key={transaction.id}>
                        <p>{transaction.title}</p>
                        <p className={transaction.type}>
                            {
                                new Intl.NumberFormat('pt-BR',{
                                    style: 'currency',
                                    currency: 'BRL'
                                }).format(transaction.amount)
                            }
                        </p>
                        <p>{transaction.category}</p>
                        <p>
                        {
                            new Intl.DateTimeFormat('pt-BR').format(new Date(transaction.createdAt))
                        }
                        </p>
                    </div>
                )}
            </div>
        </Container>
    )
}
