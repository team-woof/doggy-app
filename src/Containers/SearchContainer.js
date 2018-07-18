import { connect } from 'react-redux';
import Search from '../components/Search';
import { fetchDefaultsAction, searchButtonResult } from '../actions/actions';

const mapStateToProps = reduxState => {
  return {
    storeData: reduxState.fetchDefaults,
    searchResult: reduxState.searchResult
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchDefaults: () => dispatch(fetchDefaultsAction()),
    onSubmit: (breed, location) => dispatch(searchButtonResult(breed, location))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
