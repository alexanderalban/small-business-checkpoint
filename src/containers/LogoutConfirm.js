import { connect } from 'react-redux'
import LogoutConfirm from '../components/LogoutConfirm'

// This maps our state data to our component so that it can be used as a prop

const mapStateToProps = (state) => {
    return {
        
        loggedIn: state.loggedIn,
        user: state.user,
        business: state.business,
        newUser: state.user
    }
}

export default connect(mapStateToProps)(LogoutConfirm)