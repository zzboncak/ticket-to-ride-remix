// Let's just start with the base game, and we can add on different games later

import { Link } from "@remix-run/react";

// We need to ask how many people are playing

// We need a catalog of the routes, and their points

// We need the custom calculator to calculate the points from laying down routes

// We need a mechanism for awarding bonus points

// It would be good to be able to save the game state

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>Ticket to Ride Game Manager</h1>
      <Link to="game-setup">New Game</Link>
    </div>
  );
}
