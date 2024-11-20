import moment from "moment";
import React, { useEffect, useState } from "react";
import API from "../../services/API";
import { useSelector } from "react-redux";

function Organization() {
  let { user } = useSelector(item => item.auth)
  let [data, setData] = useState([])
  async function getOrg() {
    try {
      if (user.role == "hospital") {
        let { data } = await API.get('/inventory/v1/get-org-hospital')
        setData(data.organizations)
      }
      if (user.role == "doner") {
        let { data } = await API.get('/inventory/v1/get-org-doner')
        setData(data.organizations)
      }

    }
    catch (e) {
      console.log(e)
    }
  }
  useEffect(() => {
    getOrg()
  }, [user])
  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Phone</th>
                <th scope="col"> Date</th>

              </tr>
            </thead>
            <tbody>
              {data.length > 0 && data.map((item, i) => {
                return <tr key={i}>
                  <td>{item?.
                    originazationName
                  }</td>
                  <td>{item?.email}</td>
                  <td>{item?.phone}</td>
                  <td>{moment(item?.createdAt).startOf('hour').fromNow()}</td>

                </tr>
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>

  )
}

export default Organization;
