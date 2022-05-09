import PropTypes from "prop-types";

function SearchBar({ handler }) {
  const handleChange = (e) => {
    handler({ text: e.target.value });
  };
  return (
    <input
      type="search"
      name="busquedamusica"
      placeholder="Canción, autor, álbum..."
      onChange={handleChange}
    ></input>
  );
}
SearchBar.PropType = {
  handler: PropTypes.func.isRequired,
};

export default SearchBar;
