import React from "react";
import { Layout } from "../../componenets/layout/Layout";
import { UserMenu } from "../../componenets/layout/UserMenu";
import { useAuth } from "../../context/auth";

const Dashboard = () => {
  const [auth] = useAuth();

  return (
    <Layout title={"Dashboard - Watch Store"}>
      <div className="container-fluid m-3 p-3">
        <div className="row">
          <div className="col-md-3">
            <UserMenu />
          </div>
          <div className="col-md-9">
            <div className="card w-75 p3">
              <h3>User Name : {auth?.user?.name}</h3>
              <h3>User Email : {auth?.user?.email}</h3>
              <h3>User Contact : {auth?.user?.phone}</h3>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
