import React from "react";
import { Link, useRouteError } from "react-router-dom";

const Error = () => {
    const error = useRouteError();
  console.error(error);
  return (
    <div id="error-page" className="flex flex-col justify-center items-center lg:pt-[20%]">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <Link className="btn mt-4" to='/' >Go Home</Link>
    </div>
  );
};

export default Error;
