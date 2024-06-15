export default function RegisterForm() {
  return (
    <form>
      <div>
        <label htmlFor="username">Username</label>
        <br />
        <input type="text" name="username" id="username" />
        <br />
        <label htmlFor="password">Password</label>
        <br />
        <input type="password" name="password" />
        <br />
        <label htmlFor="displayName">Display Name</label>
        <br />
        <input type="text" name="displayName" />
        <br />
        <button>Register</button>
      </div>
    </form>
  );
}
