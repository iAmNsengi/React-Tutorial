// import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";

export default function App() {
  return <RegisterForm />;
}

// import UserDetails from "./components/UserDetails";

// export default function App() {
//   const mockUsers = [
//     {
//       id: 1,
//       username: "nsengi",
//       email: "nsengi@mail.com",
//     },
//     {
//       id: 2,
//       username: "richard",
//       email: "richard@mail.com",
//     },
//     {
//       id: 3,
//       username: "user3",
//       email: "user3@mail.com",
//     },
//   ];
//   return (
//     <>
//       {mockUsers.map((user) => {
//         return <UserDetails key={user.id} user={user} />;
//       })}
//     </>
//   );
// }

// export default function Ap() {
//   const isAuthenticated = true;
//   return isAuthenticated ? (
//     <div>
//       <h1>Welcome, User!</h1>
//     </div>
//   ) : (
//     <div>
//       <span> You are not logged in</span>
//     </div>
//   );
// }
// export default function App() {
//   const USER_STATUS = "NOT_VERIFIED";
//   if (USER_STATUS == "NOT_VERIFIED") {
//     return (
//       <div>
//         <span>You are not verified. Please verify your Email.</span>
//       </div>
//     );
//   } else if (USER_STATUS === "VERIFIED") {
//     return (
//       <div>
//         <span>You are verified. Congrats</span>
//       </div>
//     );
//   } else {
//     return (
//       <div>
//         <span>Your account is disabled!m</span>
//       </div>
//     );
//   }
// }
