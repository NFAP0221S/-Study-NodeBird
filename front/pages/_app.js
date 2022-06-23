import React from "react";
import Head from "next/head";
import PropTypes from "prop-types";
import "antd/dist/antd.css";

import wrapper from "../store/configureStore";

// Component 는 index.js에서 받아오는 데이터
const NodeBird = ({ Component }) => (
  <>
    <Head>
      <title>NodeBird</title>
    </Head>
    <Component />
  </>
);

NodeBird.propTypes = {
  Component: PropTypes.elementType.isRequired,
};

export function reportWebVitals(metric) {
  console.log(metric);
}

export default wrapper.withRedux(NodeBird);
