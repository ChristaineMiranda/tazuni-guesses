import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { LoginContainer, Input, InputBox, LoginButton, Link, TopBox, Image} from "./style";
import golImage from "../../assets/gol.jpeg";
import api from "../../service/index";
import { AuthContext } from "../../context";


export default function Login() {
    const [email,setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const {setUserAuth} = useContext(AuthContext);

    async function toEnter(e){
        e.preventDefault();
        const data = {email, password};
        try {
            const response = await api.login(data);
            const {token, name, id, foto} = response.data;
            setUserAuth({token, name, id, foto});     
            localStorage.setItem("user", JSON.stringify({ token,name, id, foto }));  
            navigate('/');     
        } catch (error) {
            console.log(error.message)
            alert("Preenchimento incorreto, por favor tente novamente.");         
        }        
    }

    return (
        <LoginContainer>
            <TopBox>
                <Image src={golImage}/>
                <span>Entrar em campo!</span>
                </TopBox>
            <InputBox onSubmit={toEnter}>
                <Input type="email" name="email" placeholder="e-mail" value={email} onChange={(e) => setEmail(e.target.value)}/>
                <Input type="password" name="password" placeholder="senha" value={password} onChange={(e) => setPassword(e.target.value)}/>
                <LoginButton>Entrar</LoginButton>
                <Link onClick={() => navigate('/sign-up')}>Não tem conta? Cadastre-se!</Link>

            </InputBox>
        </LoginContainer>
    )
}