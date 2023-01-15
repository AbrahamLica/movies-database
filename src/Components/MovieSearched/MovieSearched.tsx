import React from 'react'
import { useParams } from 'react-router-dom'
import * as C from "../../AppStyles";

const MovieSearched = () => {

const params = useParams()

  return (
    <div>
        <C.Text color='white'>Mostrando resultados para {params.slug}</C.Text>
    </div>
  )
}

export default MovieSearched