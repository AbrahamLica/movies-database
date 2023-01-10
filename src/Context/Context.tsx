import { createContext, useReducer } from "react";
import {
    ActionType, MoviesReducerInitialStateType,
    ContextType, InitialStateContextType, ChildrenType,
} from "../Types/Types";

////////////////////////  REDUCER MOVIES  ////////////////////////////////

export const MoviesReducerInitialState: MoviesReducerInitialStateType = {
    id: 0,
    titulo: '',
    detalhes: '',
    movieOpen: false,
    img: '',
    mediaVotos: 0,
    dataLançamento: '',
    homePage: true,
    openPageSelectedCategory: false,
    selectedCategory: ''
}

export function reducerMovies(state: MoviesReducerInitialStateType, action: ActionType) {
    switch (action.type) {
        case 'OPEN_DETAILS':
            return {
                ...state,
                id: action.payload.id,
                titulo: action.payload.titulo,
                detalhes: action.payload.detalhes,
                movieOpen: action.payload.movieOpen,
                img: action.payload.img,
                mediaVotos: action.payload.mediaVotos,
                dataLançamento: action.payload.dataLançamento
            }
            break;

        case 'BACK_HOME':
            return{
                ...state,
                openPageSelectedCategory: action.payload.openPageSelectedCategory,
                homePage: action.payload.homePage
            }

        case 'OPEN_POPULARES':
            return {
                ...state,
                openPageSelectedCategory: action.payload.openPageSelectedCategory,
                homePage: action.payload.homePage,
                selectedCategory: action.payload.selectedCategory
            }

        case 'OPEN_EM-CARTAZ':
            return {
                ...state,
                openPageSelectedCategory: action.payload.openPageSelectedCategory,
                homePage: action.payload.homePage,
                selectedCategory: action.payload.selectedCategory
            }

        case 'OPEN_MAISVOTADOS':
            return {
                ...state,
                openPageSelectedCategory: action.payload.openPageSelectedCategory,
                homePage: action.payload.homePage,
                selectedCategory: action.payload.selectedCategory
            }

    }
    return state
}


/////////////////////////  CONTEXT ///////////////////////////////////

const ContextInitialState = {
    movies: MoviesReducerInitialState
}

export const Context = createContext<ContextType>({
    state: ContextInitialState,
    dispatch: () => null
})

const mainReducer = (state: InitialStateContextType, action: ActionType) => ({
    movies: reducerMovies(state.movies, action)
})

export function ContextProvider({ children }: ChildrenType) {

    const [state, dispatch] = useReducer(mainReducer, ContextInitialState)

    return (
        <Context.Provider value={{ state, dispatch }}>
            {children}
        </Context.Provider>
    )
}