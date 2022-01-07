import { useMemo, useEffect, useState, useCallback } from "react";
import axios from "axios";

// -------------------------------------------------------------------
const filterMemo = (users, query) => {
  console.log("-----filter MEMO----------");
  return users.filter((users) =>
    query ? users.name.toLowerCase().includes(query?.toLowerCase()) : users
  );
};

const UserListMemo = ({ users, query }) => {
  const filtered = useMemo(() => filterMemo(users, query), [users, query]);

  return (
    <div
      style={{ background: "yellow", display: "flex", flexDirection: "column" }}
    >
      {filtered.map((user) => (
        <div key={user.id}>{user.name}</div>
      ))}
    </div>
  );
};

// -------------------------------------------------------------------

const filter = (users, query) => {
  console.log("-----filter----------");
  return users.filter((users) =>
    query ? users.name.toLowerCase().includes(query?.toLowerCase()) : users
  );
};

const UserList = ({ users, query }) => {
  const filtered = filter(users, query);

  return (
    <div
      style={{ background: "blue", display: "flex", flexDirection: "column" }}
    >
      {filtered.map((user) => (
        <div key={user.id}>{user.name}</div>
      ))}
    </div>
  );
};

// -------------------------------------------------------------------

const UseMemoHook = () => {
  // useCallback compara a função, useMemo a execução da função.
  const [count, setCount] = useState(0);
  const [query, setQuery] = useState();
  const [users, setUsers] = useState([]);

  const getUsers = useCallback(async () => {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/users/"
    );
    setUsers(data);
  }, []);

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  return (
    <div style={{ background: "#8a898a", padding: "20px" }}>
      <h2>useMemo</h2>
      <input type="text" onChange={(evt) => setQuery(evt.target.value)} />

      <button onClick={() => setCount((old) => old + 1)}>force render</button>

      <div style={{ display: "flex", flexWrap: "wrap" }}>
        <UserListMemo users={users} query={query} />
      </div>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        <UserList users={users} query={query} />
      </div>
      <div>{count}</div>
    </div>
  );
};

export default UseMemoHook;
