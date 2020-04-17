import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.scss";

const NotFound = props => {
  return (
    <React.Fragment>
      <div className="text-center">
        <h1 className="my-5 pt-5">Oops, Sorry we can’t find this page</h1>
       <Link to ='/'>
       <button className="btn btn-primary py-3 px-5">
          Go Back
        </button>
       </Link>
      </div>
    </React.Fragment>
  );
};
export default NotFound;
