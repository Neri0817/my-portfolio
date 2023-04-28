import video from "../../images/background-video.mp4";
export const Home = () => {
  return (
    <main className="home-main">
      <div className="home-container">
        <video autoPlay muted loop id="myVideo">
          <source src={video} type="video/mp4" />
        </video>
      </div>
    </main>
  );
};