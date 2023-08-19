import React from "react";
import { Layout } from "../../componenets/layout/Layout";
import { AdminMenu } from "../../componenets/layout/AdminMenu";

export const Users = () => {
  return (
    <Layout title={"Dashboard - All users"}>
      <div className="container-fluid m-3 p-3">
        <div className="row">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-9">
            <h1>All users</h1>
          </div>
        </div>
      </div>
    </Layout>
  );
};
