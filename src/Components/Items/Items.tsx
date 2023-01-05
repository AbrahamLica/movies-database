import React, { useEffect, useState } from 'react'
import * as C from '../../AppStyles'
import { useContext } from 'react';
import { Context } from '../../Context/Context';
import { useNavigate } from 'react-router-dom';



const Items = () => {

    const { state, dispatch } = useContext(Context);
    const navigate = useNavigate()

    useEffect(() => {
        executarRequisicao()
    }, []);

    const [requisicao, setRequisicao] = useState<RequisicaoType[]>([])
    const key: string = '7c41526b8e248796d7b1e264a1e5730d'
    const imagePath: string = 'https://image.tmdb.org/t/p/w300/'

    type RequisicaoType = {
        id?: number
        title?: string
        overview?: string
        popularity?: number
        vote_average?: number
        poster_path?: string
        release_date?: string
    }


    async function executarRequisicao() {
        var req = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=pt-BR&page=1`)
        var json = await req.json()
        setRequisicao(json.results)
    }

    function abreDetalhes(
        id: any,
        titulo: string | undefined,
        detalhes: string | undefined,
        img: any,
        mediaVotos: number|undefined,
        dataLançamento: string|undefined) {
        dispatch({
            type: 'OPEN_DETAILS',
            payload: {
                id: id,
                titulo: titulo,
                detalhes: detalhes,
                movieOpen: true,
                img: img,
                mediaVotos: mediaVotos,
                dataLançamento: dataLançamento
            }
        })


        navigate('/movie')
    }

    return (

        <C.Container>


            <C.Text
                color='white'
                bold
                textAlign='center'
                fontSize='40px'
            >
                Populares
            </C.Text>

            <C.Container
                width='90%'
                backgroundColor='black'
                displayFlex
                flexWrap
                alignItems='center'
                justifyContent='center'
                margin='auto'
            >




                {requisicao.map((item, index) => (
                    <C.Container
                        width='222px'
                        heigth='450px'
                        displayFlex
                        column
                        padding='30px'
                        margin='10px'
                        key={index}
                    >

                        <C.Container>
                            <img src={`${imagePath}${item.poster_path}`} alt="" width={200} height={300} />
                        </C.Container>

                        <C.Container
                            width='90%'
                            displayFlex
                            column
                            flex='1'
                        >

                            <C.Container
                                displayFlex
                                column
                                flex='1'
                                alignItems='flex-start'
                            >
                                <C.Text color='white' bold fontSize='18px' id='teste'>{item.title}</C.Text>

                            </C.Container>

                            <C.Container
                                displayFlex
                                justifyContent='center'
                            >
                                <C.Button onClick={() => abreDetalhes(item.id, item.title, item.overview, item.poster_path, item.vote_average, item.release_date)}>Detalhes</C.Button>
                                <C.Button onClick={() => console.log(state.movies)}>teste</C.Button>
                            </C.Container>

                        </C.Container>






                    </C.Container>

                ))}

            </C.Container>
        </C.Container>

    )
}

export default Items