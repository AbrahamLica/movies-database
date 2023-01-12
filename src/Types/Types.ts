export type MoviesReducerInitialStateType = {
    id: number
    titulo: string
    detalhes: string
    movieOpen: boolean
    img: string
    mediaVotos: number
    dataLançamento: string
    homePage: boolean
    openPageSelectedCategory: boolean
    selectedCategory: string
    paginaAtual: number
}

export type ActionType = {
    type: string
    payload: {
        [key: string]: any;
    }
}

export type ChildrenType = {
    children: React.ReactNode
}


export type ContextType = {
    state: InitialStateContextType;
    dispatch: React.Dispatch<any>;
}

export type InitialStateContextType = {
    movies: MoviesReducerInitialStateType
}

