import { useQuery, gql } from "@apollo/client";
import { useEffect, useState } from "react";

const GET_CHARACTER = gql`
  query {
    characters {
      results {
        name
        id
        status
        image
      }
    }
  }
`;

const GraphQLComponent = () => {
  const  { error, data, loading } = useQuery(GET_CHARACTER);

  const [payload, setPayload] = useState([]);

  useEffect(() => {
    setPayload(data?.characters?.results);
  }, [data]);


  return (
    <>
      <div
        style={{
          display: "flex",
          gap: "10px",
          flexWrap: "wrap",
          marginTop: "20px",
          width: "100vw",

        }}
      >
        {payload?.map((item) => (
          <div
            key={item.id}
            style={{
              background: "blue",
              width: "100px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              height: "200px",
              color: "white"
            }}
          >
            <img
              style={{ width: "50px", height: "50px" }}
              src={item.image}
              alt=""
            />
            <p style={{ textAlign: "center" }}>{item.name}</p>
            <p>{item.status}</p>
          </div>
        ))}
      </div>
      {loading && <div>Loading...</div>}
    </>
  );
};

export default GraphQLComponent;
