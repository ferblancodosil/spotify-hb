const { useState } = require("react");

function Busqueda() {
  const [search, setSerch] = useState();

  return <div search={search(setSerch)}></div>;
}

Busqueda.propType = {};
export default Busqueda;
