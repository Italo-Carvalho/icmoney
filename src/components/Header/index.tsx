import logoImg from '../../assets/logo.svg'
import { Container, Content } from './styles'

interface HeaderProps {
    onOpenNewTranslationModal: () => void;
}

export function Header({ onOpenNewTranslationModal }: HeaderProps) { //props.onOpenNewTranslationModal
    return (
        <Container>
            <Content>
                <img src={logoImg} alt="ic money" />
                <button type="button" onClick={onOpenNewTranslationModal}>
                    Nova transação
                </button>

            </Content>
        </Container>
    )
}