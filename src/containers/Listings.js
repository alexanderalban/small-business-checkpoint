import { connect } from 'react-redux'
import Listings from '../components/Listings'
import { removeBusiness } from '../redux/actions'

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
        removeBusiness: (index) => dispatch(removeBusiness(index)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Listings)