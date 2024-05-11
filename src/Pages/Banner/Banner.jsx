const Banner = () => {
  return (
    <div className="flex items-center justify-center h-screen mb-12 overflow-hidden">
      <video autoPlay loop muted>
        <source
          src="https://www.staging3.harmonysuites.com/wp-content/uploads/2023/08/1920-x-895-Reel-V6.mp4"
          type="video/mp4"
        />
      </video>
    </div>
  );
};

export default Banner;
