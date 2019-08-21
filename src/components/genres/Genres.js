import React from "react";
import { Badge } from "antd";

const Genres = props => {
  return (
    <div className="gender-container">
      {props.genres.map((value, index) => {
        return (
          <Badge
            className="space-bewten-badge"
            key={index}
            status="success"
            text={value}
          />
        );
      })}
    </div>
  );
};

export default Genres;
