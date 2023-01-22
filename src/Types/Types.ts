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
    searchMovie: boolean
    paginaAtual: number
    loading: boolean
    movie: string
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

export type RequisicaoType = {
    id?: number;
    title?: string;
    overview?: string;
    popularity?: number;
    vote_average?: number;
    poster_path?: string;
    release_date?: string;
  };

