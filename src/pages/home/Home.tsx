const Home = () => {
  return (
    <div>
      Welcome {import.meta.env.VITE_APP_TITLE}{" "}
      {import.meta.env.VITE_BASE_API_URL}
    </div>
  );
};

export default Home;
