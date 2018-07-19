import { connect } from 'react-redux';
import Results from '../components/Results';
// import { fetchDefaultsAction, searchButtonResult } from '../actions/actions';

const mapStateToProps = reduxState => {
    return {

        searchResults: reduxState.searchResults
    };
};

const mapDispatchToProps = dispatch => {
    return {
        // fetchDefaults: () => dispatch(fetchDefaultsAction()),
        // onSubmit: (breed, location) => dispatch(searchButtonResult(breed, location))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Results);