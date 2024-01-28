"use client";

import { WinnerDisplay } from "./ui/winner-display/WinnerDisplay";

const Winner = () => {
  const battleWins = null;
  return <>{battleWins && <WinnerDisplay text={battleWins} />}</>;
};

export { Winner };
