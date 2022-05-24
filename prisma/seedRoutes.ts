import { PrismaClient } from "@prisma/client";
import type { Route } from "@prisma/client";
const db = new PrismaClient();

async function seed() {
  await Promise.all(
    getRoutes().map(route => {
      return db.route.create({ data: route });
    })
  )
}

seed();

function getRoutes(): Route[] {
  return [
    {
      startCity: "Portland",
      endCity: "Nashville",
      points: 17,
      playerId: null,
      completed: false
    },
    {
      startCity: "Los Angeles",
      endCity: "Chicago",
      points: 16,
      playerId: null,
      completed: false
    },
    {
      startCity: "Seattle",
      endCity: "Los Angeles",
      points: 9,
      playerId: null,
      completed: false
    },
    {
      startCity: "Winnipeg",
      endCity: "Little Rock",
      points: 11,
      playerId: null,
      completed: false
    },
    {
      startCity: "Vancouver",
      endCity: "Santa Fe",
      points: 13,
      playerId: null,
      completed: false
    },
    {
      startCity: "Duluth",
      endCity: "El Paso",
      points: 10,
      playerId: null,
      completed: false
    },
    {
      startCity: "Denver",
      endCity: "Pittsburgh",
      points: 11,
      playerId: null,
      completed: false
    },
    {
      startCity: "Denver",
      endCity: "El Paso",
      points: 4,
      playerId: null,
      completed: false
    },
    {
      startCity: "Helena",
      endCity: "Los Angeles",
      points: 8,
      playerId: null,
      completed: false
    },
    {
      startCity: "Portland",
      endCity: "Phoenix",
      points: 11,
      playerId: null,
      completed: false
    },
    {
      startCity: "Calgary",
      endCity: "Phoenix",
      points: 13,
      playerId: null,
      completed: false
    },
    {
      startCity: "New York",
      endCity: "Atlanta",
      points: 6,
      playerId: null,
      completed: false
    },
    {
      startCity: "Montréal",
      endCity: "New Orleans",
      points: 13,
      playerId: null,
      completed: false
    },
    {
      startCity: "Chicago",
      endCity: "Santa Fe",
      points: 9,
      playerId: null,
      completed: false
    },
    {
      startCity: "Vancouver",
      endCity: "Montréal",
      points: 20,
      playerId: null,
      completed: false
    },
    {
      startCity: "Los Angeles",
      endCity: "Miami",
      points: 20,
      playerId: null,
      completed: false
    },
    {
      startCity: "Montréal",
      endCity: "Atlanta",
      points: 9,
      playerId: null,
      completed: false
    },
    {
      startCity: "Kansas City",
      endCity: "Houston",
      points: 5,
      playerId: null,
      completed: false
    },
    {
      startCity: "Los Angeles",
      endCity: "New York",
      points: 21,
      playerId: null,
      completed: false
    },
    {
      startCity: "Chicago",
      endCity: "New Orleans",
      points: 7,
      playerId: null,
      completed: false
    },
    {
      startCity: "Sault Ste. Marie",
      endCity: "Nashville",
      points: 8,
      playerId: null,
      completed: false
    },
    {
      startCity: "Duluth",
      endCity: "Houston",
      points: 8,
      playerId: null,
      completed: false
    },
    {
      startCity: "Dallas",
      endCity: "New York",
      points: 11,
      playerId: null,
      completed: false
    },
    {
      startCity: "Sault Ste. Marie",
      endCity: "Oklahoma City",
      points: 9,
      playerId: null,
      completed: false
    },
    {
      startCity: "Winnipeg",
      endCity: "Houston",
      points: 12,
      playerId: null,
      completed: false
    },
    {
      startCity: "Toronto",
      endCity: "Miami",
      points: 10,
      playerId: null,
      completed: false
    },
    {
      startCity: "Calgary",
      endCity: "Salt Lake City",
      points: 7,
      playerId: null,
      completed: false
    },
    {
      startCity: "San Francisco",
      endCity: "Atlanta",
      points: 17,
      playerId: null,
      completed: false
    },
    {
      startCity: "Seattle",
      endCity: "New York",
      points: 22,
      playerId: null,
      completed: false
    },
    {
      startCity: "Boston",
      endCity: "Miami",
      points: 12,
      playerId: null,
      completed: false
    },
  ]
}