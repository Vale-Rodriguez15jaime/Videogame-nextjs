import { Monster } from "@/interfaces/monster.interface";
import { MonstersList } from "./ui/monsters-list/MonstersList";

const Monster = async () => {
  const monsters = [] as Monster[];

  return <MonstersList monsters={monsters} />;
};

export { Monster };
