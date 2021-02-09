import React from "react";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";

const GET_Countries = gql`
  query {
    countries {
      name
    }
  }
`;

export default function App() {
  const result = useQuery(GET_Countries);

  const { loading, error, data } = result;

  return (
    <div>
      <h1>React + Apollo Client</h1>
      <h4>Countries</h4>
      {loading ? (
        <div>data loading.....</div>
      ) : error ? <p>jjjj</p> : (
        <div>
          <ul>
            {data.countries.map((i: any, index: number) => (
              <li key={index}>{i.name}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}


