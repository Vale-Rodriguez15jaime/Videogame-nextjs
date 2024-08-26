"use client";

import { useSelector } from "react-redux";
import { MonsterBattleCard } from "../ui/monster-battle-card/MonsterBattleCard";
import {
  selectMonsters,
  selectSelectedComputerMonster,
  selectSelectedMonster,
} from "@/reducers/monsters/monsters.selectors";
import { useCallback, useEffect } from "react";
import { useAppDispatch } from "@/store/hooks";
import { setSelectedComputerMonster } from "@/reducers/monsters/monsters.actions";

const ComputerCard = () => {
  const selectedMonster = useSelector(selectSelectedMonster);
  const listMonsters = useSelector(selectMonsters);
  const computerCurrentMonster = useSelector(selectSelectedComputerMonster);
  const dispatch = useAppDispatch();

  const calculateRandomMonster = useCallback(() => {
    const newListMonstersWithoutP1 = listMonsters.filter(
      (item) => item.id !== selectedMonster?.id
    );

    const indexRandom = Math.floor(
      Math.random() * newListMonstersWithoutP1.length
    );

    const computerMonster = newListMonstersWithoutP1[indexRandom];

    dispatch(setSelectedComputerMonster(computerMonster));
  }, [dispatch, listMonsters, selectedMonster]);

  useEffect(() => {
    if (selectedMonster) {
      calculateRandomMonster();
    }
  }, [selectedMonster, calculateRandomMonster]);

  return (
    <MonsterBattleCard
      title={computerCurrentMonster?.name || "Computer"}
      monster={computerCurrentMonster}
    />
  );
};

export { ComputerCard };
