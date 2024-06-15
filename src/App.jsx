import UserDetails from "./components/UserDetails";

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
        return <UserDetails key={user.id} user={user} />;
      })}
    </>
  );
}
