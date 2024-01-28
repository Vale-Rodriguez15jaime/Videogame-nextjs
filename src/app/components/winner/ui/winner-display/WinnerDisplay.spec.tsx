import { WinnerDisplay } from "@/app/components/winner/ui/winner-display/WinnerDisplay";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

describe("WinnerDisplay", () => {
  it("should render the winner text correctly", () => {
      // @TODO
  });

  it("should render the default text when no winner text is provided", () => {
    render(<WinnerDisplay />);
    const winnerText = screen.getByText("wins!");

    expect(winnerText).toBeInTheDocument();
  });
});
