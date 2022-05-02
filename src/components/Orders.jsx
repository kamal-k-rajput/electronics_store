import { useState, useEffect } from "react";
import axios from "axios";
export const Orders = () => {
  //  Get all data when admin logs in and populate it
  // store it in redux
  const [serverdata, setserverdata] = useState([]);
  const getdata = () => {
    axios
      .get("http://localhost:8080/orders")
      .then(function (r) {
        // handle success
        let d = r.data;
        setserverdata(d);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  useEffect(() => {
    getdata();
  }, []);

  return (
    <div>
      <div>
        <div>
          <select className="controls" name="progress" id="progress">
            <option value="id">ID</option>
            <option value="status">Status</option>
            <option value="cost">Cost</option>
          </select>
        </div>
        <table className="orders">
          <thead>
            <tr>
              <th>ID</th>
              <th>Problem</th>
              <th>Client Name</th>
              <th>Status</th>
              <th>Cost</th>
              <th>Change Status</th>
              <th>Accept</th>
            </tr>
          </thead>
          <tbody>
            {serverdata.map((order) => {
              return (
                <tr className="orders-row">
                  <td className="id" >{order.id}</td>
                  <td className="problem">{order.prolem}</td>
                  <td className="owner">{order.owner_name}</td>
                  <td className="status">{order.status}</td>
                  <td className="cost">{order.cost}</td>
                  <td className="change-status">
                    {/* Show select dropdown only if status is Not Accepted */}
                    <select className="changeStatus" name="changeStatus">
                      <option value="Pending">Pending</option>
                      <option value="In Progress">In Progress</option>
                      <option value="Done">Done</option>
                      <option value="Not Accepted">Not Accepted</option>
                    </select>
                  </td>
                  <td className="accept">
                    {/* Show this button only if status is Not Accepted */}
                    {/* on change make request to update it in db, and show changed status in table */}
                    {order.status === "Accepted" ? "" : <button>Accept</button>}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
