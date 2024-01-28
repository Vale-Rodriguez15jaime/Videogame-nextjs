import { ButtonStartBattle } from "./ui/button-start-battle/ButtonStartBattle";
import { ComputerCard } from "./computer-card/ComputerCard";
import { PlayerCard } from "./player-card/PlayerCard";

const Battle = () => {
  return (
    <>
      <PlayerCard />
      <ButtonStartBattle />
      <ComputerCard />
    </>
  );
};

export { Battle };
