"use client";

import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import styles from "./ButtonStartBattle.module.scss";
import { useSelector } from "react-redux";
import {
  selectSelectedMonster,
} from "@/reducers/monsters/monsters.selectors";

const ButtonStartBattle = () => {
  const selectedMonster = useSelector(selectSelectedMonster);

  const handleStartBattleClick = async () => {
    // Fight!
  };

  return (
    <Button
      className={`${styles.startBattleButton} ${
        selectedMonster ? styles.darkButton : styles.lightButton
      }`}
      disabled={selectedMonster === null}
      onClick={handleStartBattleClick}
    >
      <Typography
        variant="button"
        color="initial"
        className={styles.typographyButton}
      >
        Start Battle
      </Typography>
    </Button>
  );
};

export { ButtonStartBattle };
