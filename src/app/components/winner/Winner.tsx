"use client";

import { useSelector } from "react-redux";
import { WinnerDisplay } from "./ui/winner-display/WinnerDisplay";
import { selectWinner } from "@/reducers/monsters/monsters.selectors";

const Winner = () => {
  const battleWins = useSelector(selectWinner);
  return <>{battleWins && <WinnerDisplay text={battleWins.name} />}</>;
};

export { Winner };
