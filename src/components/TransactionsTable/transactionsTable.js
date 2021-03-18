import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";


export function TransactionsTable() {
    useEffect(() => {
        api.get('http://localhost:3000/api/transactions')
        .then(response=>console.log(response.data))
    }, [])

    return (
        <Container>
            <div className="header">
                <p>Título</p>
                <p>Valor</p>
                <p>Categoria</p>
                <p>Data</p>
            </div>
            <div className="table">
                <div>
                    <p>Compra 1</p>
                    <p className="income">RS5.000</p>
                    <p>Salário</p>
                    <p>01/02/2021</p>
                </div>
                <div>
                    <p>Compra 1</p>
                    <p className="outcome">- RS500</p>
                    <p>Jogos</p>
                    <p>02/02/2021</p>
                </div>
            </div>
        </Container>
    )
}
