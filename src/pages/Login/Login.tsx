import React, { ChangeEvent, useEffect } from 'react';
import { Grid, Box, Typography, TextField, Button } from '@material-ui/core';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import UserLogin from '../../models/UserLogin';
import useLocalStorage from 'react-use-localstorage';
import { login } from '../../services/Service';
import './Login.css';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { addToken } from '../../store/tokens/actions';

function Login() {

    const dispatch = useDispatch();
    let navigate = useNavigate(); //antigo history = useHistory
    const [token, setToken] = useState('');

    const [UserLogin, setUserLogin] = useState<UserLogin>(
        {
            id: 0,
            usuario: '',
            senha:'',
            token: ''
        })

        function updatedModel(e: ChangeEvent<HTMLInputElement>)
        {
            setUserLogin({
                ... UserLogin,
                [e.target.name]: e.target.value
            })
        }

        useEffect(()=>{
            if (token != '')
            {
                dispatch(addToken(token))
                navigate('/home')
            }
        }, [token])

        async function onSubmit(e: ChangeEvent<HTMLFormElement>) 
        {
            e.preventDefault();

           try{
                await login(`/usuarios/logar`, UserLogin, setToken)
                toast.success("Usuário logado com sucesso!", {
                    position: "top-right",
                    autoClose: 2500,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    theme: 'light',
                    progress: undefined,
                })
                
           }catch(error){
            toast.error('Dados do usuário inconsistentes. Erro ao logar!', {
                position: "top-right",
                autoClose: 2500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                theme: 'light',
                progress: undefined,
            })

           }
        }

    return (
        <Grid container direction='row' justifyContent='center' alignItems='center' className='background'>
            <Grid alignItems='center' xs={6}>
                <Box paddingX={20}>
                    <form onSubmit={onSubmit}>
                        <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center' className='titulo'>Entrar</Typography>
                        <TextField value={UserLogin.usuario} onChange={(e:ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='usuario' label='E-mail' name='usuario' margin='normal' type='email' fullWidth />
                        <TextField value={UserLogin.senha} onChange={(e:ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='senha' label='Senha' name='senha' margin='normal' type='password'fullWidth />
                        <Box marginTop={2} textAlign='center'>

                                <Button className='button' type='submit' variant='contained'>
                                    Logar
                                </Button>

                        </Box>
                    </form>
                    <Box className='txt-cadastro' display='flex' justifyContent='center' marginTop={2}>
                        <Box marginRight={1}>
                            <Typography variant='subtitle1' gutterBottom align='center'>Não tem uma conta?</Typography>
                        </Box>
                        <Link to='/cadastrousuario'>
                            <Typography variant='subtitle1' gutterBottom align='center' className='textos1'>Cadastre-se</Typography>
                        </Link>
                            
                    </Box>
                </Box>
            </Grid>
            <Grid xs={6} className='imagem'>
            </Grid>
        </Grid>
    );
}

export default Login;