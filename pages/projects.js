import React from "react";
import Layout from "../components/layout/Layout";
import Projects from "../components/Projects";
import TechStack from '../components/TechStack'

export default function projects() {
  return (
    <Layout>
      <Projects />
      <TechStack/>
    </Layout>
  );
}