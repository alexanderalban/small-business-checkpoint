import { connect } from 'react-redux'
import Map from '../components/Map'

const mapStateToProps = (state) => {
    return {
        business: state.business,
    }
}

export default connect(mapStateToProps)(Map)