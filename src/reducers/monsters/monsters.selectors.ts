import { RootState } from "@/store";

export const selectMonsters = (state: RootState) => state.monsters.monsters;
export const selectSelectedMonster = (state: RootState) =>
  state.monsters.selectedMonster;
