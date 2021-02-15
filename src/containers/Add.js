import { connect } from 'react-redux'
import Add from '../components/Add'
import { addBusiness, removeBusiness } from '../redux/actions'

const mapStateToProps = (state) => {
    return {
        
        loggedIn: state.loggedIn,
        user: state.user,
        business: state.business,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addBusiness: (business) => dispatch(addBusiness(business)),
        removeBusiness: (index) => dispatch(removeBusiness(index)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Add)