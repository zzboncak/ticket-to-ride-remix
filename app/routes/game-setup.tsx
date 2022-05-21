import { Form } from "@remix-run/react";
import { useState } from "react";
import type { ActionFunction } from "@remix-run/node";

/**
 * On submit, a new game will be created and saved to the database
 * with an array of players, containing the names of what's in the input
 *
 */

export const action: ActionFunction = async ({ request }) => {
  const data = await request.formData();
  const players = [];
  for (let i = 1; i <= 5; i++) {
    const player = data.get(`player${i}`);
    if (player) {
      players.push(player);
    }
  }
  console.log("~ players", players);
  return players;
};

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
    <Form method="post">
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
