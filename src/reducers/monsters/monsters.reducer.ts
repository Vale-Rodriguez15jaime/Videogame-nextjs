import { createReducer } from "@reduxjs/toolkit";
import {
  setSelectedMonster,
} from "./monsters.actions";
import { Monster } from "@/interfaces/monster.interface";

interface MonsterState {
  monsters: Monster[];
  selectedMonster: Monster | null;
}

const initialState: MonsterState = {
  monsters: [],
  selectedMonster: null
};

export const monstersReducer = createReducer(initialState, (builder) => {
  builder.addCase(setSelectedMonster, (state, action) => ({
    ...state,
    selectedMonster: action.payload,
  }));
});
