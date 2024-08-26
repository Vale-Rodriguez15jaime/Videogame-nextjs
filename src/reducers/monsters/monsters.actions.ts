import { Monster } from "@/interfaces/monster.interface";
import { createAction } from "@reduxjs/toolkit";

export const setSelectedMonster = createAction<Monster | null>(
  "monsters/setSelectedMonster"
);

export const setSelectedComputerMonster = createAction<Monster | null>(
  "monsters/setSelectedComputerMonster"
);

export const setListMonster = createAction<Monster[]>(
  "monsters/setListMonster"
);
export const setWinner = createAction<Monster | null>(
  "monsters/setWinner"
);
export const resetGame = createAction<void>(
  "monsters/resetGame"
);
