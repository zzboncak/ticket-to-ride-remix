/**
 *
 * Need to fetch how many players
 * Display players to pick which one you want to calculate the score.
 */

import { Link, Outlet, useLoaderData } from "@remix-run/react";
import { json } from "@remix-run/node";
import type { LoaderFunction } from "@remix-run/node";
import { db } from "~/utils/db.server";

export const loader: LoaderFunction = async () => {
  const data = await db.player.findMany();
  console.log("~ data", data);
  return json(data);
}

export default function Calculate() {
  // For now, dummy data. TODO: Fetch the players from the database
  const players = ["player1", "player2", "player3", "player4", "player5"];
  const dataFromLoader = useLoaderData();
  console.log("~ dataFromLoader", dataFromLoader);
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
