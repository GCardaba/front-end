import type { CharacterT } from "../../types/";
import "./style.css";


export const CharacterCard = (params: {id?: number, character?: CharacterT}) => {

    return(
        <>
           {params.character && (
             <div className="character-card">
               <h2>{params.character.name}</h2>
               <p>Altura: {params.character.height}</p>
               <p>Peso: {params.character.mass}</p>
               <p>Color de pelo: {params.character.hair_color}</p>
               <p>Color de piel: {params.character.skin_color}</p>
               <p>Color de ojos: {params.character.eye_color}</p>
               <p>Año de nacimiento: {params.character.birth_year}</p>
               <p>Género: {params.character.gender}</p>
               <p> FECHA CREACION: {params.character.created}</p>
               <p> FECHA <strong>ULTIMA</strong> edicion: {params.character.edited }</p>
             </div>
           )}
        </>
    )
}

export const CharacterList = (params: {arr: CharacterT[]}) => {
  return (
    <div className="character-list">
      {params.arr.map((e) => <CharacterCard key={e.url} character={e} />)}
    </div>
  );
}