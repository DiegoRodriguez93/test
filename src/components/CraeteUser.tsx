import { useState } from "react";
import { useMutation } from "@apollo/client";

import { CREATE_NEW_USER_MUTATION } from "../graphQL/mutations";

export const CraeteUser = () => {
  const [createUser, { error }] = useMutation(CREATE_NEW_USER_MUTATION);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLasttName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPasssword] = useState("");

  const handleCreateUser = () => {
    createUser({
      variables: {
        firstName,
        lastName,
        email,
        password,
      },
    }).then((res) => console.log(res));

    if (error) {
      console.error(error);
    }
  };

  return (
    <>
      <input
        type="text"
        name="firstName"
        onChange={(e) => setFirstName(e.target.value)}
      />
      <input
        type="text"
        name="lastName"
        onChange={(e) => setLasttName(e.target.value)}
      />
      <input
        type="text"
        name="email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        name="password"
        onChange={(e) => setPasssword(e.target.value)}
      />
      <button onClick={handleCreateUser}>Create User</button>
    </>
  );
};
