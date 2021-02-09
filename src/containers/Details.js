import { connect } from 'react-redux'
import Details from '../components/Details'

const mapStateToProps = (state) => {
    return {

        loggedIn: state.loggedIn,
        user: state.user,
        business: state.business,
    }
}

export default connect(mapStateToProps)(Details)