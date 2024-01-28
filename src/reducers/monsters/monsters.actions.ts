import { Monster } from "@/interfaces/monster.interface";
import { createAction } from "@reduxjs/toolkit";

export const setSelectedMonster = createAction<Monster | null>(
  "monsters/setSelectedMonster"
);