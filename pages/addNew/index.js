import Layout from "../../components/layouts/layout";
import AddNewCom from "../../components/addNew";
import Head from "next/head";

const AddNew = () => {
  return (
    <Layout>
      <Head>
        <title>Add New Meet Up</title>
      </Head>
      <AddNewCom />
    </Layout>
  );
};

export default AddNew;
