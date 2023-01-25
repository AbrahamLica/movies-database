import * as C from "../../AppStyles";
import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../Context/Context";
import star from "../../imgs/star.png";
import date from "../../imgs/date.svg";
import description from "../../imgs/description.svg";
import { useNavigate } from "react-router-dom";

const Movie = () => {
  const { state, dispatch } = useContext(Context);
  const [dataFormatada, setDataFormatada] = useState<any>();
  const navigate = useNavigate();

  useEffect(() => {
    var data = state.movies.dataLançamento;
    var dataa = data.split("-");
    var dataFinal = `${dataa[2]}/${dataa[1]}/${dataa[0]}`;
    setDataFormatada(dataFinal);
    window.scrollTo(0, 0);
  }, []);

  function voltar() {
    navigate(-1);
  }

  return (
    <C.Container displayFlex column alignItems="center" padding="20px 0">
      <C.ImgMovie
        src={`https://image.tmdb.org/t/p/w300/${state.movies.img}`}
        alt=""
      >
      </C.ImgMovie>
        
      

      <C.ContainerTitleMovie>
        <C.TextTitleMovie>{state.movies.titulo}</C.TextTitleMovie>
      </C.ContainerTitleMovie>

      <C.ContainerVotos>
        <img src={star} alt="" width={30} height={30} />
        <C.Text color="white">{state.movies.mediaVotos}</C.Text>
      </C.ContainerVotos>

      <C.ContainerMainDetailsAndDate>
        <C.ContainerMainDate
          alignItems={state.movies.detalhes ? "flex-start" : "center"}
        >
          <C.ContainerDate>
            <img src={date} alt="" width={30} height={30} />
            <C.TextDate>Data de Lançamento</C.TextDate>
          </C.ContainerDate>

          <C.Text color="white">{dataFormatada}</C.Text>
        </C.ContainerMainDate>

        {state.movies.detalhes ? (
          <React.Fragment>
            <C.ContainerTitleDescricao displayFlex alignItems="center">
              <img src={description} alt="" width={30} height={30} />
              <C.Text color="white" margin="0 0 0 5px">
                Descrição
              </C.Text>
            </C.ContainerTitleDescricao>

            <C.Container width="100%">
              <C.Text color="white">{state.movies.detalhes}</C.Text>
            </C.Container>
          </React.Fragment>
        ) : null}
      </C.ContainerMainDetailsAndDate>

      <C.Button onClick={voltar}>Voltar</C.Button>
    </C.Container>
  );
};

export default Movie;
