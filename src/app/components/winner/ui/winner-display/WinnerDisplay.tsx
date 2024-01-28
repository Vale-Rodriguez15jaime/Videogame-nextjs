import styles from "./WinnerDisplay.module.scss";
import Typography from "@mui/material/Typography";

type Props = {
  text?: string | undefined;
};

const WinnerDisplay = ({ text }: Props) => {
  return (
    <div className={styles.winnerBox}>
      <Typography color="initial" className={styles.messageWinner}>
        {text} wins!
      </Typography>
    </div>
  );
};

export { WinnerDisplay };
