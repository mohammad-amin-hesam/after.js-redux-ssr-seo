import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchTest } from "./actions";
import { Helmet } from "react-helmet";

const Details = props => {
  useEffect(() => {
    props.fetchTest();
    window.addEventListener("clicl", click);
    return () => window.removeEventListener("click", click, false);
  }, []);

  const item = props.posts;

  const click = () => console.log("click");

  return (
    <>
      <Helmet>
        <title>{item.title && item.title}</title>
        <meta name="title" content={item.title && item.title} />
        <meta
          name="description"
          content={`${item.description && item.description}`}
        />

        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content={`http://158.58.190.57:3000${props.location.pathname}`}
        />
        <meta property="og:title" content={item.title && item.title} />
        <meta
          property="og:description"
          content={item.description && item.description}
        />
        <meta property="og:image" content={item.images && item.images[0]} />

        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content={`http://158.58.190.57:3000${props.location.pathname}`}
        />
        <meta property="twitter:title" content={item.title && item.title} />
        <meta property="twitter:description" content="" />
        <meta
          property="twitter:image"
          content={item.images && item.images[0]}
        />
      </Helmet>
      <div>Details Page</div>
      <div>
        <p>{`${props.posts.address}`}</p>
        <p>{`${props.posts.title}`}</p>
        <p>{`${props.posts.city_name}`}</p>
      </div>
    </>
  );
};

//5aec579ba6f4527bd700d658

Details.getInitialProps = async ({ store }) => {
  await store.dispatch(fetchTest());
};

const mstp = ({ posts }) => ({ posts });

export default connect(
  mstp,
  { fetchTest }
)(Details);
