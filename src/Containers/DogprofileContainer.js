import { connect } from "react-redux";
import Dogprofile from "../components/Dogprofile";

const mapStateToProps = reduxState => {
  console.log("reduxState", reduxState)
  return {
    searchResults: reduxState.searchResults,
    profileId: reduxState.profileIdReceive
  }
};

// const mapDispatchToProps = dispatch => {
//   return {}
// };

export default connect(
  mapStateToProps,
  null
)(Dogprofile);
