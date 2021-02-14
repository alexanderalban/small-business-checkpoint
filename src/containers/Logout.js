import { connect } from 'react-redux'
import Logout from '../components/Logout'
import { logout } from '../redux/actions'

const mapStateToProps = (state) => {
    return {
        
        loggedIn: state.loggedIn,
        user: state.user,
        business: state.business,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        logout: (isLoggedIn) => dispatch(logout(isLoggedIn)),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Logout)