
import React, { useState } from 'react';
import Button from './Botao';
import Input from './Input';
import LoginContainer from './LoginContainer';

export default function PaginaLogin() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleLogin = () => {
        const usuario = username;
        const senha = password;

        if (usuario === 'admin' && senha === 'senha123') {
            sessionStorage.setItem('usuario', usuario);
            sessionStorage.setItem('senha', senha);

            window.open('https://freeboard.io/board/0Ztm5G', '_blank');
        } else {
            setErrorMessage('Credenciais incorretas. Tente novamente.');
        }
    };

    return (
        <LoginContainer>
            <p>Para acessar a página é necessário realizar o login.</p>
            <p>Usuário: <Input type="text" value={username} onChange={(e) => setUsername(e.target.value)} /></p>
            <p>Senha: <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} /></p>
            <Button onClick={handleLogin}>Login</Button>
            {errorMessage && <p>{errorMessage}</p>}
        </LoginContainer>
    );
}



