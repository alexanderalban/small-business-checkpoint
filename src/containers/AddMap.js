import { connect } from 'react-redux'
import AddMap from '../components/AddMap'

const mapStateToProps = (state) => {
    return {
        loggedIn: state.loggedIn,
        user: state.user,
        business: state.business,
    }
}

export default connect(mapStateToProps)(AddMap)