const reducer = (state = {}, action) => {
    switch (action.type) {
        case 'GET_TRENDING_MOVIES':
            return { ...state, isLoading: true }
        case 'GET_TOP_RATED_MOVIES':
            return { ...state, isLoading: true }
        case 'GET_POPULAR_MOVIES':
            return { ...state, isLoading: true }
        case 'TRENDING_MOVIES_RECEIVED':
            return { ...state, trendingMovies: action.movies.results, isLoading: false }
        case 'TOP_RATED_MOVIES_RECEIVED':
            return { ...state, topRatedMovies: action.movies.results, isLoading: false }
        case 'POPULAR_MOVIES_RECEIVED':
            return { ...state, popularMovies: action.movies.results, isLoading: false }
        case 'SEARCH_MOVIES ':
            return { ...state, isLoading: false }
        case 'SEARCHED_MOVIE_DATA_RECEIVED ':
            return { ...state, searchedMovies: action.movies.results, isLoading: false }
        case 'SET_BOOKING_DATE':
            return { ...state, bookingDate: action.payload }
        case 'SET_BOOKING_TIME_AND_HALL':
            return { ...state, bookingTimeAndHall: action.payload }
        case 'SET_SELECTED_SEAT':
            return { ...state, selectedSeat: action.payload }
        default:
            return state;
    }
}

export default reducer;