import { Form } from "@remix-run/react";
import { useState } from "react";
import type { ActionFunction } from "@remix-run/node";
import { redirect } from "@remix-run/node";
import { db } from "~/utils/db.server";
import { genNewPlayer } from "~/utils/helpers";

/**
 * On submit, a new game will be created and saved to the database
 * with an array of players, containing the names of what's in the input
 *
 */

export const action: ActionFunction = async ({ request }) => {
  const data = await request.formData();
  await db.game.upsert({ where: {id: "blah"}, update: {id: "blah"}, create: {id: "blah"} });
  for (let i = 1; i <= 5; i++) {
    const playerName = data.get(`player${i}`);
    if (playerName) {
      const newPlayer = genNewPlayer((playerName as string), i, "blah");
      await db.player.create({ data: newPlayer });
    }
  }
  
  // loop through the players and add them to the database
  // first, create a game, then create the players, and add them to the new game
  return redirect("/calculate");
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
