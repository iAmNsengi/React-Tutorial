import PropTypes from "prop-types";
import { UserFavoriteFoods } from "./UserFavoriteFoods";
import { UserUsername } from "./UserUsername";
export function UserProfile(props) {
  return (
    <div>
      <UserUsername username={props.username} />
      <div>
        <span>Email:</span>
        <span>nsengi@mail.com</span>
      </div>
      <div>
        <span>Age: </span>
        <span>{props.age}</span>
      </div>
      <section>
        <span>Favorite Foods:</span>
        <br />
        <ul>
          <li>Sushi</li>
          <li>Pizza</li>
          <li>Ric</li>
        </ul>
      </section>
      <UserFavoriteFoods />
    </div>
  );
}

UserProfile.propTypes = {
  username: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
};
