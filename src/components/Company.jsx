import React from "react";
import AppContext from "./AppContext";
import { useContext, useState, useEffect } from "react";

// And now we can use these
const Company = (props) => {
  const { name, sector, siren, ...otherProps } = props;
  return (
    <>
      <div {...otherProps}>
        <div className="infoCompanyContainer">
          <p>{name}</p>
        </div>
        <div className="infoCompanyContainer">
          <p>{siren}</p>
        </div>
        <div className="infoCompanyContainer companyContainerTag">
          <p>{sector}</p>
        </div>
      </div>
    </>
  );
};

export default Company;
