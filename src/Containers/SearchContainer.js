import { connect } from 'react-redux';
import Search from '../components/Search';
import { fetchDefaultsAction } from '../actions/actions';

const mapStateToProps = reduxState => {
  return {
    storeData: reduxState.fetchDefaults
  };
};

const mapDispatchToProps = dispatch => {
  return {
    data: () => dispatch(fetchDefaultsAction())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
