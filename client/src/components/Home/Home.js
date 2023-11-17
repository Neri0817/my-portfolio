import video from "../../images/background-video.mp4";
export const Home = () => {
  return (
    <main className="home-main">
      <div className="home-background-container">
        <video autoPlay muted loop id="myVideo">
          <source src={video} type="video/mp4" />
        </video>
      </div>
      <div className="home-container">
        <div className="home-container-context"></div>
        <div className="home-container-profile">
          <div className="home-container-profile-img"></div>
        </div>
      </div>
    </main>
  );
};
