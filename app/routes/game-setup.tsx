import { Form } from "@remix-run/react";
import { useState } from "react";

export default function GameSetup() {
  const [numberOfPlayers, setNumberOfPlayers] = useState(1);
  const inputs = [];

  for (let i = 0; i < numberOfPlayers; i++) {
    inputs.push(
      <input
        key={i}
        placeholder={`Player ${i + 1}`}
        name={`player${i + 1}`}
        type="text"
        required
      />
    );
  }
  return (
    <Form>
      <h2>How many people are playing?</h2>
      <button
        type="button"
        onClick={() => {
          if (numberOfPlayers > 0 && numberOfPlayers < 5) {
            setNumberOfPlayers(numberOfPlayers + 1);
          }
        }}
      >
        Add Player
      </button>
      <button
        type="button"
        onClick={() => {
          if (numberOfPlayers <= 5 && numberOfPlayers > 1) {
            setNumberOfPlayers(numberOfPlayers - 1);
          }
        }}
      >
        Remove Last Player
      </button>
      <section>{inputs}</section>
      <button type="submit">Start Game</button>
    </Form>
  );
}
