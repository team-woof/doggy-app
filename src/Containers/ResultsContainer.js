import { connect } from 'react-redux';
import Results from '../components/Results';
import { profileIdReceive } from '../actions/actions';

const mapStateToProps = reduxState => {
    return {
        searchResults: reduxState.searchResults
    };
};

const mapDispatchToProps = dispatch => {
    return {
        // fetchDefaults: () => dispatch(fetchDefaultsAction()),
        profileId: id => dispatch(profileIdReceive(id))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Results);