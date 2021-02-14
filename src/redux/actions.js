const url = "https://maps.google.com/maps/api/geocode/json?key=AIzaSyDV9qVXL_Czy4GtRoz6phwRS5iKrQh8m1o&address=Austin+Texas"


// for business locations
export const addBusiness = (business) => {
    return {
        type: 'ADD_BUSINESS',
        value: business
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

//for login
export const login = (isLoggedIn) => {
    return {
        type: 'LOGIN',
        value: isLoggedIn
    }
}

//for logout
export const logout = (isLoggedIn) => {
    return {
        type: 'LOGOUT',
        value: isLoggedIn
    }
}