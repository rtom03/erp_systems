import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../services/appServices";
import { register } from "../reducers/appReducer";
const Home = () => {
  const user = useSelector((state) => state.user);
  // console.log(user);
  const dispatch = useDispatch();
  const handleLogout = async () => {
    const res = await logoutUser();
    dispatch(register(res));
  };
  return (
    <div>
      <button onClick={() => console.log(user)}>tap</button>

      <div>
        <div>
          <p>{user.message}</p>
          <h2>{user.user.name}</h2>
          <p>{user.user.email}</p>

          <button onClick={() => handleLogout()}>Logout</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
