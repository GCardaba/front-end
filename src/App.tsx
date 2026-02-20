
import { useEffect, useState } from "react";
import './App.css'
import { CharacterList  } from "./components/characters";
import {ErrorMsg} from "./components/ErrorMsg";
import { Loader } from "./components/Loader";

import type { CharacterT } from "./types";
import { api } from "./api/api";

const App = () => {
  const [characters, setCharacters] = useState<CharacterT[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [next, setNext] = useState<string | null>(null);

  const [num, setNum] = useState<number>(1);



  const fetchCharacters = async () => {
    setLoading(true);
    setError(null);
    await api
    .get(!next ? `/people?page=${num}` : next)
    .then((res) => {
      setCharacters(characters.concat(res.data.results));
      setNext(res.data.next.replace(api, ""));
    })
  .catch (() =>  { setError("Error al obtener los datos");} )
  .finally (() => {
    setLoading(false);
  })
};

  useEffect(() => {
    fetchCharacters();
  }, [num]);

  return (
    <>
      
      <button
        onClick={() => {
          setNum(Number(num + 1))  ;
        }}
      >
        Siguiente página -{'>'}
      </button>
      {loading && <Loader />}
      {error && <ErrorMsg message={error} />}
      {!loading && <CharacterList arr={characters} />}
    </>
  );
};

export default App;