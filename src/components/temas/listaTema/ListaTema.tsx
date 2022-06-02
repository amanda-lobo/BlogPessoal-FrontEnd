import { Box, Button, Card, CardActions, CardContent, Typography } from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom'
import './ListaTema.css'

function ListaTema() {
    return (
        <>
            <Box m={2} className='background2' >
                <Card variant="outlined">
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>
                            Tema
                        </Typography>
                        <Typography variant="h5" component="h2">
                            Minha descrição
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Box display="flex" justifyContent="center" mb={1.5} >
                            <Link to="" className="text-decoration">
                                <Box mx={1}>
                                    <Button className='btn-tema' variant="contained" size='small'>
                                        atualizar
                                    </Button>
                                </Box>
                            </Link>
                                <Link to="" className="text-decoration">
                                    <Box mx={1}>
                                        <Button className='btn-tema' variant="contained" size='small'>
                                            deletar
                                        </Button>
                                    </Box>
                            </Link>
                        </Box>
                    </CardActions>
                </Card>
            </Box>
        </>
    )
}

export default ListaTema