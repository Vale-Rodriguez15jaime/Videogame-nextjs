import { WinnerDisplay } from "@/app/components/winner/ui/winner-display/WinnerDisplay";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import monstersData from "../../../../../../data/monsters.json";

describe("WinnerDisplay", () => {
  it("should render the winner text correctly", () => {
    const monster = monstersData.monsters[0];
    render(<WinnerDisplay text={monster.name} />);
    const winnerText = screen.getByText(`${monster.name} wins!`);

    expect(winnerText).toBeInTheDocument();
  });

  it("should render the default text when no winner text is provided", () => {
    render(<WinnerDisplay />);
    const winnerText = screen.getByText("wins!");

    expect(winnerText).toBeInTheDocument();
  });
});
