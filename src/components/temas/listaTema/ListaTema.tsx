import { Box, Button, Card, CardActions, CardContent, Typography } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import Tema from '../../../models/Tema'
import { busca } from '../../../services/Service'
import { TokenState } from '../../../store/tokens/tokensReducer'
import './ListaTema.css'

function ListaTema() {
    const [temas, setTemas] = useState<Tema[]>([])

    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
      );

    let navigate = useNavigate();

    useEffect(() => {
        if (token == '') {
            toast.error("Você precisa estar logado!", {
                position: "top-right",
                autoClose: 2500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                theme: 'light',
                progress: undefined,
            })
            navigate("/login")
        }
    }, [token])


    async function getTema() {
        await busca("/temas", setTemas, {
            headers: {
                'Authorization': token
            }
        })
    }


    useEffect(() => {
        getTema()
    }, [temas.length])

    return (
        <>
        {
            temas.map(tema =>(
            <Box m={2} className='background2' >
                <Card variant="outlined">
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>
                            Tema
                        </Typography>
                        <Typography variant="h5" component="h2">
                        {tema.descricao}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Box display="flex" justifyContent="center" mb={1.5} >
                            <Link to={`/formularioTema/${tema.id}`} className="text-decoration">
                                <Box mx={1}>
                                    <Button className='btn-postagem-tema' variant="contained" size='small'>
                                        atualizar
                                    </Button>
                                </Box>
                            </Link>
                            <Link to={`/deletartema/${tema.id}`} className="text-decoration">
                                <Box mx={1}>
                                    <Button className='btn-postagem-tema' variant="contained" size='small'>
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

export default ListaTema