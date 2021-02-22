import { connect } from 'react-redux'
import Navigation from '../components/Navigation'

const mapStateToProps = (state) => {
    return {
        
        loggedIn: state.loggedIn,
        user: state.user,
        business: state.business,
        newUser: state.user
    }
}

export default connect(mapStateToProps)(Navigation)