import type { Player } from "@prisma/client";

export function genNewPlayer(name: string, index: number, gameId: string): Player {
  return {
    name,
    score: 0,
    longestRoute: false,
    gameId,
    id: index
  }
}