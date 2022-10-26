import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Characters } from "../models/Characters";
import Card from '../components/Card'

const Search = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const queryString = require("query-string");

  const { queries = "" } = queryString.parse(location.search);

  const [characters, setCharacters] = useState([]);
  const [input, setInput] = useState(queries);

  const handleChange = (e) => {
    const value = e.target.value;
    setInput(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`?queries=${input}`);
    
  };

  const getCharacter = () => {
    if (input.trim() !== "") {
      const value = input.toLocaleLowerCase();
      const character = Characters.filter((character) =>
        character.name.toLocaleLowerCase().includes(value)
      );
      setCharacters(character);
    } else {
      setCharacters([]);
    }
  };

  useEffect(() => {
    getCharacter();
  }, [queries]);

  return (
    <>
      <h2 className="mt-3 text-center">Search Screen</h2>
      <hr />
      <div className="container d-flex flex-wrap justify-content-center gap-5 my-5">
        <div className="col-auto">
          <h2>Buscar...</h2>
          <form onSubmit={handleSubmit}>
            <label className="form-label w-100">
              <input
                type="text"
                placeholder="Nombre del personaje"
                className="form-control"
                autoComplete="off"
                value={input}
                onChange={handleChange}
              />
            </label>
            <button type="submit" className="btn btn-primary w-100">
              Buscar
            </button>
          </form>
        </div>
        <div className="col">
          <h2> Results: {characters.length}</h2>
          <div className="container d-flex flex-wrap justify-content-center gap-5 my-5">

          {
            characters.length === 0 && <div className="alert alert-warning text-center w-100">Please, search characters</div>
          }
          {
            characters.map( character => <Card key={character.id} {...character} />)
          }
          </div>
        </div>
      </div>
    </>
  );
};

export default Search;
