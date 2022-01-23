import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../provider/async/asyncActions";

const AsyncContainer = () => {
  const users = useSelector((state) => state.async.users);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>5 - Async using of redux</h1>
      <button onClick={() => dispatch(fetchUsers())}>Clicar para fazer o fetch</button>

      {users &&
        users.map((item, index) => (
          <div
            style={{ display: "flex", background: "yellow", margin: "10px" }}
            key={index}
          >
            <div>{item.id} -</div>
            <div>{item.name}</div>
          </div>
        ))}
    </div>
  );
};

export default AsyncContainer;
