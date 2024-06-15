import PropTypes from "prop-types";
export default function UserDetails({ user }) {
  return (
    <div>
      <span>ID: {user.id} </span>
      <span>
        {" "}
        <b>Username</b> : {user.username}{" "}
      </span>
      <span>
        <b>Email</b>: {user.email}{" "}
      </span>
      <hr />
    </div>
  );
}

UserDetails.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
    username: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }),
};
