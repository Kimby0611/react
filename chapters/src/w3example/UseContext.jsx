import React, { createContext, useContext, useState } from "react";

const UserContext = createContext();
const UseContext = () => {
  const [user, setUser] = useState("Jesse Hall");
  const changeuser = () => setUser("KKKKK");
  return (
    <UserContext.Provider value={user}>
      <h1>{`Hello ${user}!`}</h1>
      <button onClick={changeuser}>change</button>
      <Component2 />
    </UserContext.Provider>
  );
};

const Component2 = () => {
  return (
    <>
      <h2>Component2</h2>
      <Component3 />
    </>
  );
};

const Component3 = () => {
  return (
    <>
      <h2>Component3</h2>
      <Component4 />
    </>
  );
};
const Component4 = () => {
  return (
    <>
      <h2>Component4</h2>
      <Component5 />
    </>
  );
};
const Component5 = () => {
  const user = useContext(UserContext);
  return (
    <>
      <h2>Component5</h2>
      <h3>{`Hello ${user} again`}</h3>
    </>
  );
};
export default UseContext;
