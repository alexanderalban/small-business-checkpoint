import { connect } from 'react-redux'
import Add from '../components/Add'

const mapStateToProps = (state) => {
    return {
        
        loggedIn: state.loggedIn,
        user: state.user,
        business: state.business,
    }
}

export default connect(mapStateToProps)(Add)