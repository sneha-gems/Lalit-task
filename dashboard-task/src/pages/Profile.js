import { useContext } from "react";
import { Layout } from "../components/Layout";
import { UserContext } from "../context";

export const Profile = () => {
  const { user } = useContext(UserContext);
  console.log("user", user);

  return (
    <UserContext.Consumer>
      {/* <Layout> */}
      {({ user }) => {
        return (
          <Layout>
            <>
              <p>Profile</p>
              {user.email}
            </>
          </Layout>
        );
      }}
      {/* </Layout> */}
    </UserContext.Consumer>
  );
};
