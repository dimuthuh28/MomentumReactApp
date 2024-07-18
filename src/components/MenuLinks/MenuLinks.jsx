import React from "react";
import "./MenuLinks.css";
import { Link } from "react-router-dom";

function MenuLinks(props){
  return(
    <>
      <Link to={props.url}>{props.linkname}</Link>
    </>
  );
}

export default MenuLinks;