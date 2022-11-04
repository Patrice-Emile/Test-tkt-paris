import React from "react";
import Company from "./Company";
import Link from "next/link";
import { useEffect } from "react";

const ListCompany = (props) => {
  const { companies, ...otherProps } = props;

  useEffect(() => {
    if (!companies) {
      return "No companies :'(";
    }
  });
  return (
    <div {...otherProps}>
      {companies &&
        companies.map((company) => (
          <>
            <Link
              key={company.id}
              href={{
                pathname: "/dashboard/company",
                query: { id_company: company.id },
              }}
            >
              <Company
                className="companyContainer"
                name={company.name}
                siren={company.siren}
                sector={company.sector}
              />
            </Link>
          </>
        ))}
    </div>
  );
};

export default ListCompany;
