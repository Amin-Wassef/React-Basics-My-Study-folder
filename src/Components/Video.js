// Visit: npmjs.org
// Search for: react video
/**
 * How to choose:
 * Frequency of updates
 * Check github page (have a lot of stars)
 * Make search on the package name
 */

import ReactPlayer from "react-player";
import SaintsCovers from "../Assets/SaintsCovers.mp4";

// const onlineVid = "https://www.youtube.com/watch?v=cP_QInl4QW0&t=10s";

function Video() {
  const onlineVidURL = "https://www.youtube.com/watch?v=cP_QInl4QW0&t=10s";

  return (
    <>
      <video height={500} width={900} src={SaintsCovers} alt="Covers" />
      <p></p>
      <ReactPlayer
        height={500}
        width={700}
        playing={false}
        volume={0.5}
        url={onlineVidURL}
        alt="Monastisim"
      />
    </>
  );
}

export default Video;
