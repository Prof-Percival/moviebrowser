import Hero from "./Hero";
const Home = () => {
  return (
    <>
      <Hero text="Welcome to Movie Browser" />
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2 my-5">
            <p className="lead">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex quam
              pariatur, impedit distinctio atque, suscipit, sint eligendi
              similique aut modi assumenda voluptatibus? Amet nam facere non
              harum nisi, eaque aliquam?
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
