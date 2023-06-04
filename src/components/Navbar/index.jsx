import { Navbar, Logo, LoginButton } from "./style";
import logoCopa from '../../assets/logocopa.jpg';
import { useNavigate } from "react-router-dom";

export default function NavBar() {
    const navigate = useNavigate();
    // ao fazer login o botão de login deve virar um menu de usuario - perfil, conta, etc
    return (
        <Navbar>
            <div><Logo src={logoCopa}></Logo></div>
            <div className="flex space-x-20">
                <h1>Ranking Geral</h1>
                <h1>Meu Grupo</h1>
                <h1>Próximos Jogos</h1>
            </div>
            <div><LoginButton onClick={() => navigate('/sign-in')}>Entrar</LoginButton></div>
        </Navbar>
    )
}