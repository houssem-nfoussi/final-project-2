import React, { useState } from "react";
import { useSelector } from "react-redux";
import Card from "./Card";

const List = ({ search, categ }) => {
  const paintings = useSelector((state) => state.PaintingSlice.paintings);
  return (
    <div className="list">
        {categ=="all"?paintings
        .filter((el) => el.name.toLowerCase().includes(search.toLowerCase()))
        .map((el) => (
          <Card el={el} />
        )):paintings
        .filter((el) => (el.category==categ) && (el.name.toLowerCase().includes(search.toLowerCase())) )
        .map((el) => (
          <Card el={el} />
        ))}
      {}
    </div>
  );
};

export default List;
