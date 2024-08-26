import { RootState } from "@/store";

export const selectMonsters = (state: RootState) => state.monsters.monsters;
export const selectWinner = (state: RootState) => state.monsters.winner;
export const selectSelectedMonster = (state: RootState) =>
  state.monsters.selectedMonster;
export const selectSelectedComputerMonster = (state: RootState) =>
  state.monsters.selectedComputerMonster;
