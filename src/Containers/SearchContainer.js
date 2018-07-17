import { connect } from 'react-redux';
import Search from '../components/Search'


const mapStateToProps = reduxState => {
  return {

    title: "TEST"

  }
}

const mapDispatchToProps = dispatch => {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)