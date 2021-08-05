import AddNewComponent from "../../components/main/addNew";
import Layout from "../../components/layouts/layout";
import Head from "next/head";

const AddNew = () => {
  return (
    <Layout>
      <Head>
        <title>Add New Meet Up</title>
      </Head>
      <AddNewComponent />
    </Layout>
  );
};

export default AddNew;
