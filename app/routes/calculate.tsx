/**
 *
 * Need to fetch how many players
 * Display players to pick which one you want to calculate the score.
 */

import { Link, Outlet } from "@remix-run/react";

export default function Calculate() {
  // For now, dummy data. TODO: Fetch the players from the database
  const players = ["player1", "player2", "player3", "player4", "player5"];
  return (
    <main>
      <h1>Calculate Scores</h1>
      {players.map((player, index) => {
        return (
          <div key={index}>
            <Link to={player}>{player}</Link>
          </div>
        );
      })}
      <Outlet />
    </main>
  );
}
