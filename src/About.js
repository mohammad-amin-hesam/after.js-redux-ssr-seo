import React from "react";

const About = () => {
  const renderUsers = () => {
    return <div>Hi</div>;
  };

  return (
    <>
      <div>Hello there</div>
      <ul>{renderUsers()}</ul>
    </>
  );
};

// About.getInitialProps = async ({ store }) => {
//   await store.dispatch(fetchTest());
//   return { ss: "ss" };
// };

export default About;
