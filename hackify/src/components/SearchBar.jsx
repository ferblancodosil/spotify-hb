import PropTypes from "prop-types";

function SearchBar({ handler }) {
  // const [search, setSerch] = useState();
  const handleChange = (e) => {
    handler(e.target.value);
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

//Busqueda.propType = {};
export default SearchBar;
