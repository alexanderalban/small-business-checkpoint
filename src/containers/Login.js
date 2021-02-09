import { connect } from 'react-redux'
import Login from '../components/Login'

const mapStateToProps = (state) => {
    return {
        
        loggedIn: state.loggedIn,
        user: state.user,
        business: state.business,
    }
}

export default connect(mapStateToProps)(Login)