import styled from "styled-components";

/////////////////// PROPS ///////////////////////

export type ContainerProps = {
  color?: string;
  id?: any;
  width?: string;
  heigth?: string;
  backgroundColor?: string;
  displayFlex?: boolean;
  flex?: string;
  flexWrap?: boolean;
  alignItems?: string;
  margin?: string;
  padding?: string;
  column?: boolean;
  border?: string;
  borderRadius?: string;
  cursorPointer?: boolean;
  backgroundImage?: string;
  backgroundPosition?: string;
  backgroundSize?: string;
  justifyContent?: string;
};

export type InputProps = {
  color?: string;
  bold?: boolean;
  fontSize?: string;
  width?: string;
  backgroundColor?: string;
  margin?: string;
};

export type TextProps = {
  color?: string;
  bold?: boolean;
  fontSize?: string;
  textAlign?: string;
  margin?: string;
  backgroundColor?: string;
  padding?: string;
  borderRadius?: string;
  cursorPointer?: boolean;
};

/////////////////// GERAL ///////////////////////

export const Container = styled.div<ContainerProps>`
  color: ${(props) => props.color};
  width: ${(props) => props.width};
  height: ${(props) => props.heigth};
  background-color: ${(props) => props.backgroundColor};
  display: ${(props) => (props.displayFlex ? "flex" : "block")};
  flex: ${(props) => props.flex};
  flex-direction: ${(props) => (props.column ? "column" : "row")};
  flex-wrap: ${(props) => props.flexWrap && "wrap"};
  align-items: ${(props) => props.alignItems};
  justify-content: ${(props) => props.justifyContent};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  border: ${(props) => props.border};
  border-radius: ${(props) => props.borderRadius};
  background-image: url(${(props) => props.backgroundImage});
  background-position: ${(props) => props.backgroundPosition};
  background-repeat: no-repeat;
  background-size: ${(props) => props.backgroundSize};
  cursor: ${(props) => (props.cursorPointer ? "pointer" : null)};
  overflow: hidden;
`;

export const Button = styled.button`
  padding: 0.5em 1.3em;
  border: 2px solid #17c3b2;
  position: relative;
  overflow: hidden;
  background-color: transparent;
  text-align: center;
  text-transform: uppercase;
  font-size: 16px;
  transition: 0.3s;
  z-index: 1;
  font-family: inherit;
  color: #17c3b2;
  cursor: pointer;

  ::before {
    content: "";
    width: 0;
    height: 300%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(45deg);
    background: #17c3b2;
    transition: 0.5s ease;
    display: block;
    z-index: -1;
  }

  :hover::before {
    width: 105%;
  }

  :hover {
    color: #111;
  }
`;

export const Text = styled.p<TextProps>`
  color: ${(props) => props.color};
  font-weight: ${(props) => (props.bold ? "bold" : "light")};
  font-size: ${(props) => props.fontSize};
  text-align: ${(props) => props.textAlign};
  margin: ${(props) => props.margin};
  background-color: ${(props) => props.backgroundColor};
  border-radius: ${(props) => props.borderRadius};
  padding: ${(props) => props.padding};
  cursor: ${(props) => (props.cursorPointer ? "pointer" : null)};
`;

////////////////////////// CARD ///////////////////////

export const ContainerImgItemCard = styled.div<ContainerProps>`
  width: 200px;
  height: 200px;
  border-radius: 20px;
  cursor: pointer;
  background-image: ${(props) => props.backgroundImage};
  background-size: cover;
  background-position: center;
`;

export const TextCard = styled.p<TextProps>`
  cursor: pointer;
  text-align: center;
  font-weight: bold;
  color: black;
  font-size: 25px;
  padding: 6px;
  border-radius: 10px;
  background-color: #17c3b2;
`;

export const ContainerItemCard = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  width: 200px;
`;

////////////////////////// HEADER ///////////////////////

export const ContainerHeaderLeft = styled.div<ContainerProps>`
  display: flex;
  align-items: center;
  cursor: pointer;

  @media(max-width: 375px) {
    margin-bottom: 20px;
  }
`;

export const ContainerHeaderRight = styled.div<ContainerProps>`
  display: flex;
  align-items: center;
`;

export const InputHeaderRight = styled.input<InputProps>`
  background-color: black;
  max-width: 190px;
  height: 10px;
  padding: 10px;
  border: 2px solid #17c3b2;
  border-radius: 5px;
  color: white;
  font-size: ${(props) => props.fontSize};
  width: ${(props) => props.width};
  margin: 0px 10px 0px 0px;

  :focus {
    color: #17c3b2;
    outline-color: #17c3b2;
    box-shadow: -3px -3px 15px #17c3b2;
    transition: 0.1s;
    transition-property: box-shadow;
  }
`;

export const ContainerGlassImg = styled.div<ContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 5px;
  padding: 5px;
  background-color: #17c3b2;
`;

////////////////////////// HOME  ///////////////////////

export const ContainerMainHome = styled.div<ContainerProps>`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const ContainerHeader = styled.div<ContainerProps>`
  width: 95vw;
  display: flex;
  justify-content: space-between;
  padding: 10px;

  @media(max-width: 375px) {
    flex-direction: column;
    align-items: center;
  }

  @media(max-width: 320px) {
    width: 70%;
    justify-content: center;
  }
`;

export const ContainerCard = styled.div<ContainerProps>`
  width: 94vw;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 30px;

  @media (max-width: 768px) {
    align-items: center;
    justify-content: center;
    flex-direction: column;
}

  @media (max-width: 425px) {
    align-items: center;
    justify-content: center;
    flex-direction: column;
}
`;

/////////////////////// MAPPED ITEMS  ////////////////////

export const ContainerLoadingAnimation = styled.div<ContainerProps>`
  width: 100vw;
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContainerMainMappedItems = styled.div<ContainerProps>`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
`;

export const TextTitleMappedItems = styled.div<ContainerProps>`
  color: white;
  font-weight: bold;
  text-align: center;
  font-size: 40px;
`;

export const ContainerMainItems = styled.div<ContainerProps>`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

export const ContainerErro = styled.div<ContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TextErroMappedItems = styled.div<ContainerProps>`
  color: white;
  font-weight: bold;
  text-align: center;
  font-size: 40px;
`;

export const ContainerItem = styled.div<ContainerProps>`
  width: 200px;
  height: 450px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
  margin: 10px;
`;

export const ContainerBottomItem = styled.div<ContainerProps>`
  width: 90%;
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const ContainerBottomItemTitle = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: flex-start;
`;

export const TextBottomItemTitle = styled.div<ContainerProps>`
  color: white;
  font-weight: bold;
  font-size: 18px;
  margin-top: 10px;
`;

export const ContainerButtonDetalhes = styled.div<ContainerProps>`
  display: flex;
  justify-content: center;
`;

export const ContainerMainNextBack = styled.div<ContainerProps>`
  display: flex;
  width: 100%;
  padding: 10px;

  @media(max-width: 560px) {
    flex-direction: column;
  }
`;

export const ContainerMainPageAtual = styled.div<ContainerProps>`
  display: flex;
  width: 50%;
  justify-content: flex-end;

  @media(max-width: 560px) {
    justify-content: center;
    width: 100%;
  }
`;

export const ContainerPageAtual = styled.div<ContainerProps>`
  border-radius: 50%;
  border: 1px solid #17c3b2;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  padding: 5px;
`;

export const TextPaginaAtual = styled.div<ContainerProps>`
  font-size: 25px;
  color: white;
  font-weight: bold;
  text-align: center;
`;

export const ContainerNextBack = styled.div<ContainerProps>`
  display: flex;
  justify-content: flex-end;
  width: 50%;

  @media(max-width: 560px) {
    justify-content: center;
    width: 100%;
    margin-top: 20px;
  }
`;

/////////////////////// MOVIE  ////////////////////

export const ImgMovie = styled.img<ContainerProps>`
  width: 400px;

  @media (max-width: 560px) {
    width: 200px;
  }
`;

export const ContainerTitleMovie = styled.div<ContainerProps>`
  width: 400px;

  @media (max-width: 560px) {
    width: 300px;
  }
`;

export const TextTitleMovie = styled.div<ContainerProps>`
  color: white;
  font-size: 25px;
  font-weight: bold;
  text-align: center;
  margin-top: 10px;
`;

export const ContainerVotos = styled.div<ContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContainerMainDetailsAndDate = styled.div<ContainerProps>`
  width: 500px;

  @media (max-width: 560px) {
    width: 300px;
  }

  @media (max-width: 350px) {
    width: 250px;
  }
`;

export const ContainerMainDate = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;

  @media (max-width: 560px) {
    align-items: center;
    justify-content: center;
  }
`;

export const ContainerDate = styled.div<ContainerProps>`
  display: flex;
  align-items: center;
`;

export const TextDate = styled.div<ContainerProps>`
  color: white;
  margin: 0 0 0 5px;
`;

export const ContainerTitleDescricao = styled.div<ContainerProps>`
  display: flex;
  align-items: center;

  @media (max-width: 560px) {
    justify-content: center;
  }
`;

export const TextDetalhes = styled.div<ContainerProps>`
  color: white;
  margin: 16px 0;
  
  @media (max-width: 560px) {
    text-align: center;
  }

  @media (max-width: 340px) {
    /* font-size: 15px; */
  }
`;


