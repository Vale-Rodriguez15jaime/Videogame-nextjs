import { Monster } from "@/interfaces/monster.interface";
import styles from "./MonsterBattleCard.module.scss";
import Card from "@mui/material/Card";

type MonsterCardProps = {
  monster?: Monster | null;
  title?: string;
};

const MonsterBattleCard = ({ title }: MonsterCardProps) => {
  return (
    <Card className={`${styles.battleCardPlayer} ${styles.centralized}`}>
      <p className={styles.title}>{title}</p>
    </Card>
  );
};

export { MonsterBattleCard };
