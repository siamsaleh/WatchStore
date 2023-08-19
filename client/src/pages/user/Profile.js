import React from "react";
import { Layout } from "../../componenets/layout/Layout";
import { UserMenu } from "../../componenets/layout/UserMenu";

export const Profile = () => {
  return (
    <Layout title={"Dashboard - Profile"}>
      <div className="container-fluid m-3 p-3">
        <div className="row">
          <div className="col-md-3">
            <UserMenu />
          </div>
          <div className="col-md-9">
            <h1>Profile</h1>
          </div>
        </div>
      </div>
    </Layout>
  );
};
