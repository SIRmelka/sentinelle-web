import React from "react";

const LogInput = ({ email, setEmail, password, setPassword }) => {
  return (
    <>
      <input
        type="phone"
        placeholder="numéro de téléphone"
        value={email}
        onChange={(event) => {
          setEmail(event.target.value);
        }}
        required
      ></input>
      <input
        type="Password"
        placeholder="mot de passe"
        value={password}
        onChange={(event) => {
          setPassword(event.target.value);
        }}
        required
      ></input>
    </>
  );
};

export default LogInput;
