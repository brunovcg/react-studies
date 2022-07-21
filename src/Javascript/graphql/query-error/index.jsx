import { useQuery, gql } from "@apollo/client";

const GET_CHARACTER = gql`
  query {
    characters {
      results {
        nam
        id
        status
        image
      }
    }
  }
`;

export const QueryError = () => {
  /* eslint-disable-next-line */
  const { error, data, loading } = useQuery(GET_CHARACTER);

  return (
    <>
      {error && (
        <div
          style={{
            width: "100%",
            textAlign: "center",
            color: "red",
            fontSize: "40px",
          }}
        >
          {error.message}
        </div>
      )}
      {loading && (
        <div
          style={{
            width: "100%",
            textAlign: "center",
            color: "blue",
            fontSize: "40px",
          }}
        >
          Loading...
        </div>
      )}
    </>
  );
};
