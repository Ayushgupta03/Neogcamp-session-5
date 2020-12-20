import React, { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "😊": "smiling",
  "😳": "disbelief",
  "😔": "sad",
  "🥡": "takeout box",
  "❤️": "love",
  "😑": "annoyance"
};
var emojiweknow = Object.keys(emojiDictionary);

export default function App() {
  const [mean, setmean] = useState("");

  function emojiinputhandler(event) {
    var Input = event.target.value;
    var mean = emojiDictionary[Input];
    if (mean === undefined) {
      mean = "Not available right now";
    }
    setmean(mean);
  }

  function emojihandler(emoji) {
    var mean = emojiDictionary[emoji];
    setmean(mean);
  }
  return (
    <div className="App">
      <h1>Welcome to emoticon database</h1>
      <input onChange={emojiinputhandler} />
      <h2>{mean}</h2>

      <h3>emojis we know</h3>
      {emojiweknow.map(function (emoji) {
        return (
          <span
            onClick={() => emojihandler(emoji)}
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
