import React, { useState, useEffect } from "react";
import Header from "../component/shared/Layout/Header";
import Footer from "../component/shared/Layout/Footer";
import API from "../services/API";

function Analytics() {
  let [data, setData] = useState([]);
  const colors = [
    "#884A39",
    "#C38154",
    "#FFC26F",
    "#4F709C",
    "#4942E4",
    "#0079FF",
    "#FF0060",
    "#22A699",
  ];
  async function getBloodHandler() {
    try {
      let { data } = await API.get("/organization/v1/analytics");
      setData(data.bloodGroupData);
    } catch (error) {
      console.log(error);
      return;
    }
  }
  useEffect(() => {
    getBloodHandler();
  }, []);

  return (
    <>
      <Header />
      <main style={{ minHeight: "80vh" }}>
        <div className="container">
          <div className="row d-flex justify-content-start align-items-center">
            <div className="d-flex flex-row flex-wrap">
              {data?.map((record, i) => (
                <div
                  className="card m-2 p-1"
                  key={i}
                  style={{ width: "18rem", backgroundColor: `${colors[i]}` }}
                >
                  <div className="card-body">
                    <h1 className="card-title bg-light text-dark text-center mb-3">
                      {record.bloodGroup}
                    </h1>
                    <p className="card-text">
                      Total In : <b>{record.totalIn || 0}</b> (ML)
                    </p>
                    <p className="card-text">
                      Total Out : <b>{record.totalOut || 0}</b> (ML)
                    </p>
                  </div>
                  <div className="card-footer text-light bg-dark text-center">
                    Total Available : <b>{record.availableBlood || 0}</b> (ML)
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Analytics;
