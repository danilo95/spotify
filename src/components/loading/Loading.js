import React from "react";
import { Skeleton } from "antd";
import "./loading.css";

const Loading = () => {
  return (
    <>
      <Skeleton active  class="skeleton-dark"avatar paragraph={{ rows: 4 }} />
      <Skeleton active  class="skeleton-dark"avatar paragraph={{ rows: 4 }} />
  </>
  );
};

export default Loading;
