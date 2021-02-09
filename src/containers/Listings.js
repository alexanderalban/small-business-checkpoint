import { connect } from 'react-redux'
import Listings from '../components/Listings'

const mapStateToProps = (state) => {
    return {

        loggedIn: state.loggedIn,
        user: state.user,
        business: state.business,
    }
}

export default connect(mapStateToProps)(Listings)