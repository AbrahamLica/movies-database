
import styled from "styled-components";


type ContainerProps = {
    width?: string
    heigth?: string
    backgroundColor?: string
    displayFlex?: boolean
    flex?: string
    flexWrap?: boolean
    alignItems?: string
    justifyContent?: string
    margin?: string
    padding?: string
    column?: boolean
    border?: string
}

export const Container = styled.div<ContainerProps>`
    width: ${props => props.width};
    height: ${props => props.heigth};
    background-color: ${props => props.backgroundColor};
    display: ${props => props.displayFlex ? 'flex' : 'block'};
    flex: ${props => props.flex};
    flex-direction: ${props => props.column ? 'column' : 'row'};
    flex-wrap: ${props => props.flexWrap && 'wrap'};
    align-items: ${props => props.alignItems};
    justify-content: ${props => props.justifyContent};
    margin: ${props => props.margin};
    padding: ${props => props.padding};
    border: ${props => props.border};
`
export const Img = styled.img`
    min-height: 400px;
`

export const Button = styled.button`
    
    padding: 0.5em 1.3em;
    width: 100%;
    border: 2px solid #17C3B2;
    position: relative;
    overflow: hidden;
    background-color: transparent;
    text-align: center;
    text-transform: uppercase;
    font-size: 16px;
    transition: .3s;
    z-index: 1;
    font-family: inherit;
    color: #17C3B2;
    cursor: pointer;


    ::before {
    content: '';
    width: 0;
    height: 300%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(45deg);
    background: #17C3B2;
    transition: .5s ease;
    display: block;
    z-index: -1;
    }

    :hover::before {
    width: 105%;
    }

    :hover {
    color: #111;
    }
`
type TextProps = {
    color?: string
    bold?: boolean
    fontSize?: string
}

export const Text = styled.p<TextProps>`
    color: ${props => props.color};
    font-weight: ${props => props.bold ? 'bold' : 'light'};
    font-size: ${props => props.fontSize};
`

