import { createReducer } from "@reduxjs/toolkit";
import {
  resetGame,
  setListMonster,
  setSelectedComputerMonster,
  setSelectedMonster,
  setWinner,
} from "./monsters.actions";
import { Monster } from "@/interfaces/monster.interface";

interface MonsterState {
  monsters: Monster[];
  selectedMonster: Monster | null;
  selectedComputerMonster: Monster | null;
  winner: Monster | null;
}

const initialState: MonsterState = {
  monsters: [],
  selectedMonster: null,
  selectedComputerMonster: null,
  winner: null,
};

export const monstersReducer = createReducer(initialState, (builder) => {
  builder.addCase(setSelectedMonster, (state, action) => ({
    ...state,
    selectedMonster: action.payload,
  }));
  builder.addCase(setSelectedComputerMonster, (state, action) => ({
    ...state,
    selectedComputerMonster: action.payload,
  }));
  builder.addCase(setListMonster, (state, action) => ({
    ...state,
    monsters: action.payload,
  }));
  builder.addCase(setWinner, (state, action) => ({
    ...state,
    winner: action.payload,
  }));
  builder.addCase(resetGame, (state, action) => ({
    ...state,
    selectedMonster: null,
    selectedComputerMonster: null,
    winner: null,
  }));
});
