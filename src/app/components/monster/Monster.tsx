import { Monster as MonsterType } from "@/interfaces/monster.interface";
import { MonstersList } from "./ui/monsters-list/MonstersList";
import { getMonsters } from "@/actions";

const Monster = async () => {
  const monsters: MonsterType[] = await getMonsters();

  return <MonstersList monsters={monsters} />;
};

export { Monster };
