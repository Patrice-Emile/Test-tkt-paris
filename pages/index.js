import DisplayerPage from "../src/components/DisplayerPage";
import AppContext from "../src/components/AppContext";
import { useContext, useEffect, useState } from "react";
import ListCompany from "../src/components/ListCompany";

const IndexPage = () => {
  const { getDataAPI } = useContext(AppContext);

  const [companies, setCompanies] = useState(null);
  useEffect(() => {
    getDataAPI({
      url: "https://test.wertkt.com/api/biz/",
      params: {
        _limit: 4,
      },
    }).then((data) => {
      setCompanies(data);
    });
  }, []);

  if (!companies) {
    return "Landing...";
  }

  return (
    <DisplayerPage>
      <div className="listCompany">
        <h1>Welcome on TKT dashboard!</h1>
        <ListCompany companies={companies} />
      </div>
    </DisplayerPage>
  );
};

export default IndexPage;
