import React from "react";
import { Layout } from "../componenets/layout/Layout.js";

export default function Policy() {
  return (
    <Layout title={"Privacy Policy"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/contactus.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p>privacy policy</p>
          <p>privacy policy</p>
          <p>privacy policy</p>
          <p>privacy policy</p>
          <p>privacy policy</p>
          <p>privacy policy</p>
          <p>privacy policy</p>
        </div>
      </div>
    </Layout>
  );
}
