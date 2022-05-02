import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./AuthContext";

export const Login = () => {
  const { handleAuth, address, handleaddress } = useContext(AuthContext);
  const [userdata, setuserdata] = useState({});
  const [serverdata, setserverdata] = useState([]);

  const [data, setdata] = useState({
    username: "",
    password: "",
  });
  const handlechange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setdata({ ...data, [name]: value });
  };

  function handleevent(e) {
    e.preventDefault();
    getdata();

    // <Link key={"sdfg"} to={`/`}>

    // </Link>;
  }

  const getdata = () => {
    axios
      .get("http://localhost:8080/users")
      .then(function (r) {
        // handle success
        let d = r.data;
        setserverdata(d);
        check();
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const check = () => {
    let n = serverdata.length;
    for (let i = 0; i < n; i++) {
      let temp = serverdata[i];
      if (temp.username === data.username && temp.pass === data.password) {
        setuserdata(temp);
        handleAuth(true);
        handleaddress("/orders");
        break;
      } else {
        handleaddress("/neworder");
        handleAuth(false);
      }
    }
  };
  return (
    <div>
      <input
        className="username"
        type="text"
        name="username"
        placeholder="Enter Username"
        onChange={handlechange}
      />
      <input
        className="password"
        type="password"
        name="password"
        placeholder="Enter password"
        onChange={handlechange}
      />
      {/* On this button click make network req to find user with same username and password */}
      {/* get his role, if role is `admin` take him to `/orders` page otherwise take him to `/neworder` */}

      <button className="submit" onClick={handleevent}>
        Login
      </button>

      {<div>{userdata.username}</div>}
      <Link key={Date.now() + "fds"} to={address}>
        {" "}
        see orders
      </Link>
      <h3>for login you have to click three two on login button</h3>
    </div>
  );
};
