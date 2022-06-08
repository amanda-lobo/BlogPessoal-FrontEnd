import React, { useEffect, useState } from 'react'
import { Box, Button, Card, CardActions, CardContent, Typography } from '@material-ui/core'
import { Link, useNavigate } from 'react-router-dom'
import './ListaPostagem.css'
import { busca } from '../../../services/Service'
import Postagem from '../../../models/Postagem'
import useLocalStorage from 'react-use-localstorage'

function ListaPostagem() {

    const [posts, setPosts] = useState<Postagem[]>([])
    const [token, setToken] = useLocalStorage('token');
    let navigate = useNavigate();

    useEffect(() => {
        if (token == "") {
            alert("Você precisa estar logado")
            navigate("/login")

        }
    }, [token])

    async function getPost() {
        await busca("/postagens", setPosts, {
            headers: {
                'Authorization': token
            }
        })
    }

    useEffect(() => {

        getPost()

    }, [posts.length])
    return (
        <>
            {
                posts.map(post => (
                    <Box m={2} className='background'>
                        <Card variant="outlined">
                            <CardContent className='card1'>
                                <Typography color="textSecondary" gutterBottom>
                                    Postagens
                                </Typography>
                                <Typography variant="h5" component="h2">
                                    {post.titulo}
                                </Typography>
                                <Typography variant="body2" component="p">
                                    {post.texto}
                                </Typography>
                                <Typography variant="body2" component="p">
                                    {post.tema?.descricao}
                                </Typography>
                            </CardContent>
                            <CardActions className='card1'>
                                <Box display="flex" justifyContent="center" mb={1.5}>
                                    <Link to={`/formularioPostagem/${post.id}`} className="text-decoration" >
                                        <Box mx={1}>
                                            <Button variant="contained" className="btn-postagem" size='small'>
                                                atualizar
                                            </Button>
                                        </Box>
                                    </Link>
                                    <Link to={`/deletarPostagem/${post.id}`} className="text-decoration">
                                        <Box mx={1}>
                                            <Button className='btn-postagem' variant="contained" size='small'>
                                                deletar
                                            </Button>
                                        </Box>
                                    </Link>
                                </Box>
                            </CardActions>
                        </Card>
                    </Box>
                ))
            }
        </>
    )
}

export default ListaPostagem