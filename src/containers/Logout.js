import { connect } from 'react-redux'
import Logout from '../components/Logout'
import { logout } from '../redux/actions'

// This maps our state data to our component so that it can be used as a prop

const mapStateToProps = (state) => {
    return {
        
        loggedIn: state.loggedIn,
        user: state.user,
        business: state.business,
        newUser: state.user
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        logout: (isLoggedIn) => dispatch(logout(isLoggedIn)),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Logout)