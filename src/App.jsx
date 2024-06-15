// import { UserProfile } from "./components/UserProfile";
// export default function App() {
//   const callMe = () => console.log("hello world");

//   return (
//     <div>
//       <h1>Root Component</h1>
//       <UserProfile username="Nsengi" age={22} sex="Male" callMe={callMe} />
//     </div>
//   );
// }

export default function App() {
  const mockUsers = [
    {
      id: 1,
      username: "nsengi",
      email: "nsengi@mail.com",
    },
    {
      id: 2,
      username: "richard",
      email: "richard@mail.com",
    },
    {
      id: 3,
      username: "user3",
      email: "user3@mail.com",
    },
  ];
  return (
    <>
      {mockUsers.map((user) => {
        return (
          <div key={user.id}>
           
          </div>
        );
      })}
    </>
  );
}
