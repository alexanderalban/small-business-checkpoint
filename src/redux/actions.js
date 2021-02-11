const url = "https://maps.google.com/maps/api/geocode/json?key=AIzaSyDV9qVXL_Czy4GtRoz6phwRS5iKrQh8m1o&address=Austin+Texas"


// for default locations
export const addBusiness = (car) => {
    return {
        type: 'ADD_BUSINESS',
        value: car
    }
}

export const removeBusiness = (index) => {
    return {
        type: 'REMOVE_BUSINESS',
        value: index
    }
}


// for user added location
export const fetchLocation = () => {
    return (dispatch) => {
        fetch(url)
            .then(res => res.json())
            .then(response => {
                const action = {
                    type: 'FETCH_LOCATION',
                    value: response.Results
                }
                dispatch(action)
            })
    }
}

export const deleteLocation = (index) => {
    return {
        type: 'DELETE_LOCATION',
        value: index
    }
}

//for login
export const login = (user) => {
    return {
        type: 'LOGIN',
        value: username
    }
}