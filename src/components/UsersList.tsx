import { useQuery } from "@apollo/client";

import { LOAD_USERS } from "../graphQL/queries";

export const UsersList = () => {
  const { data, loading, error } = useQuery(LOAD_USERS);

  if (error) {
    return <>Error</>;
  }

  if (loading) {
    return <>Loading...</>;
  }

  if (data) {
    console.log(data);
  }

  return <div>data</div>;
};
