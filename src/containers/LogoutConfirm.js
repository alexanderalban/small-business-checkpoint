import { connect } from 'react-redux'
import LogoutConfirm from '../components/LogoutConfirm'

const mapStateToProps = (state) => {
    return {
        
        loggedIn: state.loggedIn,
        user: state.user,
        business: state.business,
    }
}

export default connect(mapStateToProps)(LogoutConfirm)