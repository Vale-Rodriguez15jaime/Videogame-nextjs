import styles from "./page.module.scss";
import Typography from "@mui/material/Typography";
import { Winner } from "./components/winner/Winner";
import { Battle } from "./components/battle/Battle";
import { Monster } from "./components/monster/Monster";

export default async function BattleOfMonsters() {
  return (
    <div className={styles.mainSection}>
      <Typography variant="h1" color="initial" className={styles.mainTitle}>
        Battle of Monsters
      </Typography>
      <Monster />
      <Winner />
      <div className={styles.battleSection}>
        <Battle />
      </div>
    </div>
  );
}
