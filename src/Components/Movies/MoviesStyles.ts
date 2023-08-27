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
  zIndex?: boolean
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
  border: 2px solid #BA1200;
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
    background: #BA1200;
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