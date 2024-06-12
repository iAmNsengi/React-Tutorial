import "./styles.css";

export function UserUsername(props) {
  return (
    <div>
      <b className="username">Username:{props.username} </b>
      <span></span>
    </div>
  );
}
