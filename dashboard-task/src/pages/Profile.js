import { Layout } from "../components/Layout";
import { getProfileData } from "../utils";

export const Profile = () => {
  const user = getProfileData();

  return (
    <Layout>
      <>
        <p>Profile</p>
        {user?.email}
      </>
    </Layout>
  );
};
