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
  zIndex?: boolean;
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
  border: 2px solid #ba1200;
  position: relative;
  overflow: hidden;
  background-color: transparent;
  text-align: center;
  text-transform: uppercase;
  font-size: 16px;
  transition: 0.3s;
  z-index: 1;
  font-family: inherit;
  color: white;
  cursor: pointer;
  border-radius: 10px;

  ::before {
    content: "";
    width: 0;
    height: 300%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(45deg);
    background: #ba1200;
    transition: 0.5s ease;
    display: block;
    z-index: -1;
  }

  :hover::before {
    width: 105%;
  }

  :hover {
    color: white;
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
  z-index: ${(props) => (props.zIndex ? "1" : "")};
`;

export const Link = styled.a<TextProps>`
  color: ${(props) => props.color};
  font-weight: ${(props) => (props.bold ? "bold" : "light")};
  font-size: ${(props) => props.fontSize};
  text-align: ${(props) => props.textAlign};
  cursor: pointer;
  text-decoration: none;
`;

////////////////////// MAPPED ITEMS  ////////////////////

export const ContainerLoadingAnimation = styled.div<ContainerProps>`
  width: 100vw;
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContainerMainMappedItems = styled.div<ContainerProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;

export const TextTitleMappedItems = styled.div<ContainerProps>`
  padding: 10px;
  max-width: 80%;
  word-wrap: break-word;
  text-align: center;

  @media (max-width: 425px) {
    max-width: 80%;
  }
`;

export const ContainerMainItems = styled.div<ContainerProps>`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

export const ContainerErro = styled.div<ContainerProps>`
  /* max-width: 700px; */
  padding: 10px;
  max-width: 80%;
  word-wrap: break-word;

  @media (max-width: 425px) {
    max-width: 50%;
  }
`;

export const ContainerItem = styled.div<ContainerProps>`
  /* background-color: #BA1200; */
  width: 200px;
  height: 450px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
  margin: 10px;
`;

export const imgMovie = styled.img<ContainerProps>`
  width: 200px;
  height: 300px;
  transition: 0.3s;
  cursor: pointer;

  :hover {
    transform: scale(102%);
  }
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

  @media (max-width: 560px) {
    flex-direction: column;
  }
`;

export const ContainerMainPageAtual = styled.div<ContainerProps>`
  display: flex;
  width: 50%;
  justify-content: flex-end;

  @media (max-width: 560px) {
    justify-content: center;
    width: 100%;
  }
`;

export const ContainerPageAtual = styled.div<ContainerProps>`
  border-radius: 50%;
  border: 1px solid #ba1200;
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

  @media (max-width: 560px) {
    justify-content: center;
    width: 100%;
    margin-top: 20px;
  }
`;
