import { useRouter } from "next/router";
import DisplayerPage from "../../src/components/DisplayerPage";

const CompanyDetails = (props) => {
  const {
    query: { id_company },
  } = useRouter();

  return (
    <DisplayerPage>
      <div>Id company : {id_company}</div>
    </DisplayerPage>
  );
};

export default CompanyDetails;
