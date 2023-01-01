import React, { useEffect, useState } from 'react'

const Home = () => {

    const [requisicao, setRequisicao] = useState<RequisicaoType[]>([])
    const imagePath = 'https://image.tmdb.org/t/p/w500/'
    const key = '7c41526b8e248796d7b1e264a1e5730d'

    type RequisicaoType = {
        original_title: string
        overview: string
        popularity: number
    }



    useEffect(() => {
        executarRequisicao()
        console.log(requisicao)
    },[]);

    async function executarRequisicao() {
        var req = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`)
        var json = await req.json()
        setRequisicao(json)
        console.log(requisicao)
    }


    return (
        <div>
            <button onClick={executarRequisicao}>teste</button>
            {/* {requisicao.map((item, index) => (
                <p>{item.original_title}</p>
            ))} */}

        </div>
    )
}

export default Home