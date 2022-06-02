import React, { ChangeEvent, useEffect, useState } from 'react'
import { Box, Button, Grid, TextField, Typography } from '@material-ui/core'
import { Link, useNavigate } from 'react-router-dom';
import User from '../../models/User';
import { cadastroUsuario } from '../../services/Service'
import './CadastroUsuario.css';


function CadastroUsuario() {

  let navigate = useNavigate()

  const [confirmarSenha, setConfirmarSenha] = useState<String>("")

  const [user, setUser] = useState<User>({
    id: 0,
    nome: '',
    usuario: '',
    senha: '',
    foto: ''
  })

  const [userResult, setUserResult] = useState<User>({
    id: 0,
    nome: '',
    usuario: '',
    senha: '',
    foto: ''
  })

  useEffect(() => {
    if (userResult.id !== 0) {
      navigate('/login')
    }
  }, [userResult])


  function updatedModel(e: ChangeEvent<HTMLInputElement>) {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    })
  }

  function confirmarSenhaHandle(e: ChangeEvent<HTMLInputElement>) {
    setConfirmarSenha(e.target.value)
  }

  async function cadastrar(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault()

    if (confirmarSenha === user.senha) {

      try {
        await cadastroUsuario(`/usuarios/cadastrar`, user, setUserResult)
        alert("Usuário cadastrado com sucesso")

      } catch (error) {
        console.log(`Error: ${error}`)

        alert("Usuário já existente")
      }

    } else {
      alert('Confirmação de senha incorreta!')

      setUser({ ...user, senha: "" })
      setConfirmarSenha("")
    }

    if(user.senha.length >= 8)
    {
      try {
        await cadastroUsuario(`/usuarios/cadastrar`, user, setUserResult)
        alert("Usuário cadastrado com sucesso")
  
      } catch (error) {
        console.log(`Error: ${error}`)
  
        alert("Usuário já existente")
      }
    } else {
      alert("Insira no miníno 8 caracteres na senha.")

      setUser({ ...user, senha: "" }) 
      setConfirmarSenha("")           
    }
   
  }

  return (
    <>
      <Grid container direction='row' justifyContent='center' alignItems='center' className='background'>
        <Grid item xs={6} className='imagem2'></Grid>
        <Grid item xs={6} alignItems='center'>
          <Box paddingX={10}>
            <form onSubmit={cadastrar}>
              <Typography variant='h3' gutterBottom component='h3' align='center' className='textos2'>Cadastrar</Typography>

              <TextField onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                value={user.nome} id='nome' label='Nome Completo' name='nome' margin='normal' type='name' fullWidth />

              <TextField onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                value={user.usuario} id='usuario' label='E-mail' name='usuario' margin='normal' type='email' fullWidth />

              <TextField onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                value={user.foto} id='foto' label='Link da Foto' name='foto' margin='normal' fullWidth />

              <TextField onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                value={user.senha} id='senha' label='Senha' name='senha' margin='normal' type='password' fullWidth />

              <TextField onChange={(e: ChangeEvent<HTMLInputElement>) => confirmarSenhaHandle(e)}
                value={confirmarSenha} id='confirmarSenha' label='Confirmar senha' name='confirmarSenha' margin='normal'
                type='password' fullWidth />

              <Box marginTop={2} textAlign='center'>
                <Link to='/login' className='text-decoration'>
                  <Button variant='contained' color='secondary' className='btnCancelar'>
                    Cancelar
                  </Button>
                </Link>

                <Button type='submit' variant='contained' color='primary' className='btnCadastrar'>
                  Cadastrar
                </Button>

              </Box>
            </form>
          </Box>
        </Grid>



      </Grid>
    </>
  )
}

export default CadastroUsuario;