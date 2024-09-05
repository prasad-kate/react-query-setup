import "./App.css";
import { useGetUser } from "./service/sample.service";

function App() {
  const { users } = useGetUser();

  return (
    <div>
      <p>Users List:</p>
      <ul>
        {users.map(({ name, id }: { name: string; id: number }) => {
          return <li key={id}>{name}</li>;
        })}
      </ul>
    </div>
  );
}

export default App;
