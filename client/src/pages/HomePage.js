import React from "react";
import { Layout } from "../componenets/layout/Layout.js";
import { useAuth } from "../context/auth.js";

export default function HomePage() {
  const [auth, setAuth] = useAuth();
  return (
    <Layout title={"Watch Store - Shop now"}>
      <h1>HomePage</h1>
      <pre>{JSON.stringify(auth, null, 4)}</pre>
    </Layout>
  );
}
