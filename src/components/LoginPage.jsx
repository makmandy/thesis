import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import getFriendsList from "../actions/friendsList";
// import { GET_BLOGS_BY_USER_ID } from "../actions/types";
// import { startLogin } from "../actions/auth";

// Eventually, we will have to send some sort of request to the server
// that checks to see whether the user and pw match, then
// is successfully logged in or re-prompted to enter their login information
const LoginPage = props => {
  return (
    <div>
      <Typography variant="headline">Welcome back!</Typography>
      <Typography variant="body2">Click below to sign back in.</Typography>
      <Link to="/home" style={{ textDecoration: "none" }}>
        <Button
          type="submit"
          variant="raised"
          color="secondary"
          onClick={() => props.getFriendsList(1)}
        >
          Sign<br />in
        </Button>
      </Link>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    userId: state.userId
  };
};

const mapDispatchToProps = dispatch => ({
  getFriendsList: userId => dispatch(getFriendsList(userId))
  // startLogin: () => dispatch(startLogin())
});

LoginPage.propTypes = {
  // startLogin: PropTypes.func.isRequired
  getFriendsList: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginPage);

// <Button onClick={startLogin}>Login</Button>
