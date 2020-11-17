const PageNotFound = () => {
  return <div>Not found</div>;
};

export const getStaticProps = async (context) => {
  const { locale } = context;

  return {
    props: {
      locale,
    },
  };
};

export default PageNotFound;
