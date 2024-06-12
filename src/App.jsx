import { UserProfile } from "./components/UserProfile";
export default function App() {
  const callMe = () => console.log("hello world");

  return (
    <div>
      <h1>Root Component</h1>
      <UserProfile username="Nsengi" age={22} sex="Male" callMe={callMe} />
    </div>
  );
}
