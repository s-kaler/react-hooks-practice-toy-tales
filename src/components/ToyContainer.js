import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({toys, onToyDelete}) {
  return (
    <div id="toy-collection">{
      toys.map((toy) => (
        <ToyCard
          toy={toy}
          key={toy.id}
          onToyDelete={onToyDelete}
        />
      ))
    }</div>
  );
}

export default ToyContainer;
