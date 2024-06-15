export default function LoginForm() {
  return (
    <form
      method="POST"
      onSubmit={(e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const username = formData.get("username");
        const password = formData.get("pasword");
        fetch("localhost:3001/api/login", {
          body: {
            username,
            password,
          },
          method: "POST",
        });
      }}
    >
      <label htmlFor="username">Username</label> <br />
      <input
        type="text"
        id="username"
        name="username"
        onChange={(e) => {
          console.log(e.target.value);
        }}
      />{" "}
      <br />
      <label htmlFor="username">Password</label> <br />
      <input type="password" id="password" name="password" />
      <br />
      <button>Login</button>
    </form>
  );
}
