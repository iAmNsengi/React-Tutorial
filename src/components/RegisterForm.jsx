import { useState } from "react";

export default function RegisterForm() {
  // const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");
  // const [displayName, setDisplayName] = useState("");

  // const isDisabled = !username || !password || !displayName

  const [formFields, setFormFields] = useState({
    username: "",
    password: "",
    displayName: "",
  });
  return (
    <>
      <form>
        <div>
          <label htmlFor="username">Username</label>
          <br />
          <input
            type="text"
            name="username"
            id="username"
            value={formFields.username}
            onChange={(e) =>
              setFormFields((currentState) => ({
                ...currentState,
                username: e.target.value,
              }))
            }
          />
          <br />
          <label htmlFor="password">Password</label>
          <br />
          <input
            type="password"
            name="password"
            value={formFields.password}
            onChange={(e) =>
              setFormFields((currentState) => ({
                ...currentState,
                password: e.target.value,
              }))
            }
          />
          <br />
          <label htmlFor="displayName">Display Name</label>
          <br />
          <input
            type="text"
            name="displayName"
            value={formFields.displayName}
            onChange={(e) =>
              setFormFields((currentState) => ({
                ...currentState,
                displayName: e.target.value,
              }))
            }
          />
          <br />
          {/* <button disabled={isDisabled}>Register</button> */}
        </div>
      </form>

      <div>
        <span>Username: {formFields.username}</span>
        <br />
        <span>Password : {formFields.password}</span>
        <br />
        <span>Display Name : {formFields.displayName}</span>
      </div>
    </>
  );
}
