"use client";
import { selectSelectedMonster } from "@/reducers/monsters/monsters.selectors";
import { MonsterBattleCard } from "../ui/monster-battle-card/MonsterBattleCard";
import { useSelector } from "react-redux";

const PlayerCard = () => {
  const selectedMonster = useSelector(selectSelectedMonster);
  return (
    <MonsterBattleCard
      title={selectedMonster?.name || "Player"}
      monster={selectedMonster}
    />
  );
};

export { PlayerCard };
