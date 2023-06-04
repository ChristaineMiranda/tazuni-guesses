import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input, InputBox, LoginButton, LoginContainer, TitleBox, Link } from "../Login/style";
import api from "../../service";


export default function SignUp() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [foto, setfoto] = useState('');
    const navigate = useNavigate('');

    async function register(e){
        e.preventDefault();
        if(!name || !email || !password || !confirmPassword || !foto)  return alert("Preencha corretamente seu cadastro");
        if(password !== confirmPassword) return alert("As senhas precisam ser iguais! Confirme a senha desejada")
        const data = { name, email, password, confirmPassword, foto };
        try {
            await api.signUp(data);            
        } catch (error) {
            alert(error.message);
        }

    }


    return (
        <LoginContainer>
            <TitleBox>O lugar pra torcer com os amigos!</TitleBox>
            <InputBox onSubmit={register}>
                <Input type="text" name="name" placeholder="Nome" value={name} onChange={(e) => setName(e.target.value)} />
                <Input type="email" name="email" placeholder="E-mail" value={email} onChange={(e) => setEmail(e.target.value)} />
                <Input type="password" name="password" placeholder="Senha" value={password} onChange={(e) => setPassword(e.target.value)} />
                <Input type="password" name="password" placeholder="Confirme a senha" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                <Input type="foto" name="foto" placeholder="Imagem de usuário" value={foto} onChange={(e) => setfoto(e.target.value)} />

                <LoginButton>Cadastrar</LoginButton>
                <Link onClick={() => navigate('/sign-in')}>Já tem uma conta? Faça login</Link>

            </InputBox>
        </LoginContainer>
    )
}