import { useState, useEffect } from "react";
import axios from "axios";
import { nanoid } from "nanoid";
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
            <tr key={nanoid(4)}>
              <th key={nanoid(4)}>ID</th>
              <th key={nanoid(4)}>Problem</th>
              <th key={nanoid(4)}>Client Name</th>
              <th key={nanoid(4)}>Status</th>
              <th key={nanoid(4)}>Cost</th>
              <th key={nanoid(4)}>Change Status</th>
              <th key={nanoid(4)}>Accept</th>
            </tr>
          </thead>
          <tbody>
            {serverdata.map((order) => {
              return (
                <tr className="orders-row" key={nanoid(4)}>
                  <td className="id" key={nanoid(4)}>
                    {order.id}
                  </td>
                  <td className="problem" key={nanoid(4)}>
                    {order.prolem}
                  </td>
                  <td className="owner" key={nanoid(4)}>
                    {order.owner_name}
                  </td>
                  <td className="status" key={nanoid(4)}>
                    {order.status}
                  </td>
                  <td className="cost" key={nanoid(4)}>
                    {order.cost}
                  </td>
                  <td className="change-status" key={nanoid(4)}>
                    {/* Show select dropdown only if status is Not Accepted */}
                    <select className="changeStatus" name="changeStatus">
                      <option value="Pending">Pending</option>
                      <option value="In Progress">In Progress</option>
                      <option value="Done">Done</option>
                      <option value="Not Accepted">Not Accepted</option>
                    </select>
                  </td>
                  <td className="accept" key={nanoid(4)}>
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
