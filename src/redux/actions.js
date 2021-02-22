


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


// latitude for user added location
export const fetchLatitude = (address) => {
    return (dispatch) => {
        fetch(`https://maps.google.com/maps/api/geocode/json?key=AIzaSyDV9qVXL_Czy4GtRoz6phwRS5iKrQh8m1o&address=${address}`)
            .then(res => res.json())
            .then(response => {
                const action = {
                    type: 'FETCH_LATITUDE',
                    value: response.results.geometry.location.lat
                }
                dispatch(action)
            })
    }
}

//longitude for user added location
export const fetchLongitude = (address) => {
    return (dispatch) => {
        fetch(`https://maps.google.com/maps/api/geocode/json?key=AIzaSyDV9qVXL_Czy4GtRoz6phwRS5iKrQh8m1o&address=${address}`)
            .then(res => res.json())
            .then(response => {
                const action = {
                    type: 'FETCH_LONGITUDE',
                    value: response.results.geometry.location.lng
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

// for the user's username
export const userUpdate = (username) => {
    return {
        type: "USER_UPDATE",
        value: username
    }
}

//for logout
export const logout = (isLoggedIn) => {
    return {
        type: 'LOGOUT',
        value: isLoggedIn
    }
}

export const enableLogin = () => {
    return {
        type: 'ENABLE_LOGIN',
        value: true
    }
}

export const disableLogin = () => {
    return {
        type: 'DISABLE_LOGIN',
        value: false
    }
}

export const updateUserName = (userName) => {
    return {
        type: "UPDATE_USERNAME",
        value: userName
    }
}