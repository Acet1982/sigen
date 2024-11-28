import { FormAddPayroll } from "../components/FormAddPayroll";
import { TitlePages } from "../components/UI/TittlePages";
import { Layout } from "./Layout";

export const Sites = () => {
  return (
    <Layout>
      <TitlePages title="Sites" />
      <FormAddPayroll />
    </Layout>
  );
};
