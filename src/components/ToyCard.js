import React, { useState } from "react";

function ToyCard({toy, onToyDelete}) {
  const [likes, setLikes] = useState(toy.likes);
  function handleDeleteClick(){
    fetch(`http://localhost:3001/toys/${toy.id}`, {
      method: "DELETE"
    })
    .then((r) => r.json())
    .then(() => onToyDelete(toy))
  }
  function handleLikeClick () {
    setLikes(likes + 1)
    fetch(`http://localhost:3001/toys/${toy.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        likes: likes,
      }),
    })
      .then((r) => r.json())
  }

  return (
    <div className="card">
      <h2>{toy.name}</h2>
      <img
        src={toy.image}
        alt={toy.name}
        className="toy-avatar"
      />
      <p>{likes} Likes </p>
      <button className="like-btn" onClick={handleLikeClick}>Like {"<3"}</button>
      <button className="del-btn" onClick={handleDeleteClick}>Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;