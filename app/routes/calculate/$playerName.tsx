import type { LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { useState } from "react";

export const loader: LoaderFunction = async ({ params }) => {
  // will need to fetch the player's info from the db
  return params.playerName;
};

export default function PlayerName() {
  const data = useLoaderData();
  const [score, setScore] = useState(0);
  console.log("~ data", data);
  return (
    <main>
      <h3>Let's get {data}'s score right</h3>
      <h4>{score}</h4>
      <p>
        Use the calculator below to add up the points earned from routes laid
        down.
      </p>
      <p>Points reference</p>
      <table>
        <thead>
          <tr>
            <th>Route Length</th>
            <th>Points</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>1</td>
          </tr>
          <tr>
            <td>2</td>
            <td>2</td>
          </tr>
          <tr>
            <td>3</td>
            <td>4</td>
          </tr>
          <tr>
            <td>4</td>
            <td>7</td>
          </tr>
          <tr>
            <td>5</td>
            <td>10</td>
          </tr>
          <tr>
            <td>6</td>
            <td>15</td>
          </tr>
        </tbody>
      </table>

      <section>
        <h3>Calculator</h3>
        <p>Score from routes: {score}</p>
        <div>
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>4</button>
          <button>5</button>
          <button>6</button>
        </div>
      </section>
    </main>
  );
}
