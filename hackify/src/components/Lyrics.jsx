import PropTypes from "prop-types";

//funcion con el parametro que va a pintar  letter

function Lyrics({ letter }) {
  return <div>{letter}</div>;
}

Lyrics.propTypes = {
  letter: PropTypes.string.isRequired,
};

export default Lyrics;
