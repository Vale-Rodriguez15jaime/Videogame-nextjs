"use client";

import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import styles from "./ButtonStartBattle.module.scss";
import { useSelector } from "react-redux";
import {
  selectSelectedComputerMonster,
  selectSelectedMonster,
  selectWinner,
} from "@/reducers/monsters/monsters.selectors";
import { startBattle } from "@/actions";
import { Players } from "@/interfaces/players.interface";
import { useAppDispatch } from "@/store/hooks";
import { resetGame, setWinner } from "@/reducers/monsters/monsters.actions";

const ButtonStartBattle = () => {
  const dispatch = useAppDispatch();
  const selectedMonster = useSelector(selectSelectedMonster);
  const selectedWinner = useSelector(selectWinner);
  const computerCurrentMonster = useSelector(selectSelectedComputerMonster);

  const handleStartBattleClick = async () => {
    const players: Players = {
      monster1Id: selectedMonster?.id,
      monster2Id: computerCurrentMonster?.id,
    };
    try {
      const winner = await startBattle(players);
      dispatch(setWinner(winner?.winner || null));
    } catch (error) {
      console.error(error);
    }
  };

  const handleResetGame = () => {
    dispatch(resetGame());
  };

  return (
    <Button
      className={`${styles.startBattleButton} ${
        selectedMonster ? styles.darkButton : styles.lightButton
      }`}
      disabled={selectedMonster === null || computerCurrentMonster === null}
      onClick={selectedWinner ? handleResetGame : handleStartBattleClick}
    >
      <Typography
        variant="button"
        color="initial"
        className={styles.typographyButton}
      >
        {selectedWinner ? "Reset game" : "Start Battle"}
      </Typography>
    </Button>
  );
};

export { ButtonStartBattle };
