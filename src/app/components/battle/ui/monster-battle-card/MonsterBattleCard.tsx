import { Monster } from "@/interfaces/monster.interface";
import styles from "./MonsterBattleCard.module.scss";
import Card from "@mui/material/Card";
import {
  Box,
  CardMedia,
  LinearProgress,
  linearProgressClasses,
  styled,
  Typography,
} from "@mui/material";

type MonsterCardProps = {
  monster?: Monster | null;
  title?: string;
};

type StatsListType = {
  value?: number;
  title: string;
};

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: "#D9D9D9",
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: "#00FF00;",
  },
}));

const MonsterBattleCard = ({ title, monster }: MonsterCardProps) => {
  const statsList: StatsListType[] = [
    { title: "HP", value: monster?.hp },
    { title: "Attack", value: monster?.attack },
    { title: "Defense", value: monster?.defense },
    { title: "Speed", value: monster?.speed },
  ];

  return (
    <Card className={`${styles.battleCardPlayer} ${styles.centralized}`}>
      <CardMedia
        component="img"
        image={monster?.imageUrl}
        alt={monster?.name}
      />
      <p className={styles.title}>{title}</p>
      {monster && (
        <Box sx={{ width: "100%" }}>
          {statsList.map((item: StatsListType) => (
            <Box key={item.title} mb={2}>
              <Typography>{item.title}</Typography>
              <BorderLinearProgress variant="determinate" value={item.value} />
            </Box>
          ))}
        </Box>
      )}
    </Card>
  );
};

export { MonsterBattleCard };
