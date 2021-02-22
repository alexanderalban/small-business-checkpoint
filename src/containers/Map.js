import { connect } from 'react-redux'
import Map from '../components/Map'

const mapStateToProps = (state) => {
    return {
        loggedIn: state.loggedIn,
        user: state.user,
        business: state.business,
        newUser: state.user
    }
}

export default connect(mapStateToProps)(Map)