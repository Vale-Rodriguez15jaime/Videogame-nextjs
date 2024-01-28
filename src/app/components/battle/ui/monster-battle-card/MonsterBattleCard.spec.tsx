import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import monstersData from "../../../../../../data/monsters.json";
import { MonsterBattleCard } from "@/app/components/battle/ui/monster-battle-card/MonsterBattleCard";

describe("MonsterBattleCard", () => {
  it("should render the monster card correctly with a monster", async () => {
    // @TODO
  });

  it("should render the card with a title when no monster is provided", () => {
    render(<MonsterBattleCard title="No Monster" />);

    const titleElement = screen.getByText("No Monster");
    expect(titleElement).toBeInTheDocument();
  });
});
