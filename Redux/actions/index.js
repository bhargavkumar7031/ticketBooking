export const getTrendingMovies = () => ({
    type: 'GET_TRENDING_MOVIES',
  })
  
  export const getTopRatedMovies = () => ({
    type: 'GET_TOP_RATED_MOVIES',
  })
  export const getPopularMovies = () => ({
    type: 'GET_POPULAR_MOVIES',
  })

  
  export const searchMovies =(value)=>({
    type:'SEARCH_MOVIES',
    payload:value
  })

  export const setBookingDate = (date) => ({
  type: 'SET_BOOKING_DATE',
  payload:date
})

export const setBookingTimeAndHall = (timeAndHall) => ({
  type: 'SET_BOOKING_TIME_HALL',
  payload:timeAndHall
})

export const setSelectedSeat = (seat) => ({
  type: 'SET_SELECTED_SEAT',
  payload:seat
})