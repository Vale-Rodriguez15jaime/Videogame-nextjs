"use client";

import { Monster } from "@/interfaces/monster.interface";
import styles from "./MonstersList.module.scss";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { useAppDispatch } from "@/store/hooks";
import { useCallback, useEffect, useState } from "react";
import {
  setListMonster,
  setSelectedMonster,
} from "@/reducers/monsters/monsters.actions";

type MonstersListProps = {
  monsters: Monster[];
};

const MonstersList = ({ monsters }: MonstersListProps) => {
  const dispatch = useAppDispatch();
  const [selectedMonsterId, setSelectedMonsterId] = useState<string | null>(
    null
  );

  const handleMonsterClick = (monster: Monster) => {
    const value = selectedMonsterId === monster.id ? null : monster.id;
    setSelectedMonsterId(value);
    dispatch(setSelectedMonster(!value ? null : monster));
  };

  const handleSaveMonsters = useCallback(() => {
    dispatch(setListMonster(monsters));
  }, [monsters, dispatch]);

  useEffect(() => {
    if (monsters) {
      handleSaveMonsters();
    }
  }, [monsters, handleSaveMonsters]);

  return (
    <div>
      <h3 className={styles.titleSelectMonster}>
        {monsters.length > 0 ? "Select your monster" : "No monsters available"}
      </h3>
      <div className={styles.listMonsters} data-testid="monsters-list-section">
        {monsters.map((monster) => (
          <Card
            className={`${
              monster.id === selectedMonsterId && styles.selectMonster
            } ${styles.cardMonster}`}
            key={monster.id}
            onClick={() => handleMonsterClick(monster)}
            data-testid={monster.id}
          >
            <CardMedia
              className={styles.image}
              component="img"
              image={monster.imageUrl}
              alt={monster.name}
            />
            <p>{monster.name}</p>
          </Card>
        ))}
      </div>
    </div>
  );
};

export { MonstersList };
