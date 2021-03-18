import logoImg from '../../assets/logo.svg'
import { Container, Content, Grid } from './styles'

interface HeaderProps{
    onOpenNewTransactionModal : () => void;
}

export function Header({onOpenNewTransactionModal}:HeaderProps) {

    return (
        <Container>
            <Content>
                <Grid>
                    <img src={logoImg} alt="logo"/>
                </Grid>
                <Grid>
                    <button 
                        type="button"
                        onClick={onOpenNewTransactionModal}
                    >
                        Nova Transação
                    </button>
                </Grid>
            </Content>
        </Container>
    )
}
