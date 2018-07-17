import { connect } from "react-redux";
import Home from "../components/Home";

const mapReduxStateToProps = reduxState => ({
  homeReducer: reduxState.homeReducer
});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapReduxStateToProps,
  mapDispatchToProps
)(Home);
