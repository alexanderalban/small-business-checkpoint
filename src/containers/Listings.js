import { connect } from 'react-redux'
import Listings from '../components/Listings'
import { removeBusiness } from '../redux/actions'

const mapStateToProps = (state) => {
    return {

        loggedIn: state.loggedIn,
        user: state.user,
        business: state.business,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        removeBusiness: (index) => dispatch(removeBusiness(index)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Listings)