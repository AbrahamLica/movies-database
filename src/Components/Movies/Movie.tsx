import * as C from '../../AppStyles'
import { useContext, useEffect, useState } from 'react'
import { Context } from '../../Context/Context'
import star from '../../imgs/star.png'
import date from '../../imgs/date.svg'
import description from '../../imgs/description.svg'

const Movie = () => {

  const { state, dispatch } = useContext(Context);
  const [dataFormatada, setDataFormatada] = useState<any>()

  useEffect(() => {
    var data = state.movies.dataLançamento
    var dataa = data.split('-')
    var dataFinal = `${dataa[2]}/${dataa[1]}/${dataa[0]}`
    setDataFormatada(dataFinal)
    console.log(dataa)
  }, [])

  return (
    <C.Container
      width='80vw'
      displayFlex
      column
      alignItems='center'
      justifyContent='center'
      border='1px solid white'
      padding='20px'
    >



      <img
        src={`https://image.tmdb.org/t/p/w300/${state.movies.img}`}
        alt=""
        width={400}
      />

      <C.Container>
        <C.Text color='white' fontSize='25px' bold>{state.movies.titulo}</C.Text>
      </C.Container>

      <C.Container displayFlex alignItems='center' justifyContent='center'>
        <img src={star} alt="" width={30} height={30} />
        <C.Text color='white'>{state.movies.mediaVotos}</C.Text>
      </C.Container>

      <C.Container>


        <C.Container
          displayFlex
          column
        >
          <C.Container displayFlex alignItems='center'>
            <img src={date} alt="" width={30} height={30} />
            <C.Text color='white'>Data de Lançamento</C.Text>
          </C.Container>
          <C.Text color='white'>{dataFormatada}</C.Text>
        </C.Container>

        <C.Container>


          <C.Container displayFlex alignItems='center'>
            <img src={description} alt="" width={30} height={30} />
            <C.Text color='white'>Descrição</C.Text>
          </C.Container>

          <C.Text color='white'>{state.movies.detalhes}</C.Text>


        </C.Container>


      </C.Container>



      <C.Button onClick={() => console.log(state.movies)}>teste</C.Button>



    </C.Container>
  )
}

export default Movie
