import { useEffect, useState } from "react";

export const Login = () => {
  const [data, setdata] = useState({
    username: "",
    password: "",
  });
  const handleevent = (e) => {
    e.preventDefault();
    const { name, value } = e.target;

    setdata({ ...data, [name]: value });
    console.log(data);
  };
  useEffect(() => {
    console.log("I Only run once (When the component gets mounted)");

    const getdata = () => {
      console.log("in get data");
    };
    getdata();
  }, []);

  return (
    <div>
      <input
        className="username"
        type="text"
        name="username"
        placeholder="Enter Username"
        onChange={handleevent}
      />
      <input
        className="password"
        type="password"
        name="password"
        placeholder="Enter password"
        onChange={handleevent}
      />
      {/* On this button click make network req to find user with same username and password */}
      {/* get his role, if role is `admin` take him to `/orders` page otherwise take him to `/neworder` */}
      <button className="submit">Login</button>
    </div>
  );
};
