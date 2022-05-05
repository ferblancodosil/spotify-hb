import propTypes from "prop-types";

function InfoSongComponent({ author, songName, cdPic, length, discTitle }) {
  return (
    <section id="infoSongMain" className="infoSong">
      <article id="track" className="infoSong">
        <img
          src={cdPic}
          className="infoSong"
          id="infoSongPic"
          alt={discTitle}
        ></img>
        <div className="infoSong">{length}</div>
      </article>
      <article id="dataSong">
        <div className="infoSong">{author}</div>
        <div className="infoSong">{songName}</div>
        <div className="infoSong">{discTitle}</div>
      </article>
    </section>
  );
}

InfoSongComponent.propTypes = {
  author: propTypes.string,
  songName: propTypes.string,
  cdPic: propTypes.string,
  length: propTypes.string,
  discTitle: propTypes.string,
};

export default InfoSongComponent;
