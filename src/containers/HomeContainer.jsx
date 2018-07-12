import { connect } from "react-redux";
import Home from "../components/Home";

const mapStateToProps = state => ({
  userInfo: state.userInfo,
  blogs: state.blogs,
  visitedDestinations: state.visitedDestinations,
  faveDestinations: state.faveDestinations
});

// const mapDispatchToProps = dispatch => ({
//   the action for getting blogs by userId
// })

// remove line 20 and uncomment line 19 when we
// have actions & reducers for getting blog posts by user id
const HomeContainer = connect(
  mapStateToProps,
  // mapDispatchToProps
  null
)(Home);

export default HomeContainer;
