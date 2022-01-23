import { useDispatch, useSelector } from "react-redux";
import { fetchUsers, fetchUsersForceError } from "../provider/async/asyncActions";

const AsyncContainer = () => {
  const usersData = useSelector((state) => state.async);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>5 - Async using of redux</h1>
      <button onClick={() => dispatch(fetchUsers())}>
        Clicar para fazer o fetch
      </button>

      <button onClick={() => dispatch(fetchUsersForceError())}>
        Clicar para simular error
      </button>

      {usersData &&
        (usersData.loading ? (
          <div>Loading!</div>
        ) : usersData.error ? (
          <div> {usersData.error}</div>
        ) : (
          usersData.users.map((item, index) => (
            <div
              style={{ display: "flex", background: "yellow", margin: "10px" }}
              key={index}
            >
              <div>{item.id} -</div>
              <div>{item.name}</div>
            </div>
          ))
        ))}
    </div>
  );
};

export default AsyncContainer;
