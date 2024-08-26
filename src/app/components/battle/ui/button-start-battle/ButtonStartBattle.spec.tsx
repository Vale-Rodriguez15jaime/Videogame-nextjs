import { store } from "@/store";
import { ButtonStartBattle } from "./ButtonStartBattle";
import { Provider } from "react-redux";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import {
  setSelectedComputerMonster,
  setSelectedMonster,
} from "@/reducers/monsters/monsters.actions";
import monstersData from "../../../../../../data/monsters.json";

const buttonStartBattleFactory = () => {
  render(
    <Provider store={store}>
      <ButtonStartBattle />
    </Provider>
  );
};
describe("ButtonStartBattle", () => {
  it("should render the button correctly", async () => {
    buttonStartBattleFactory();
    const buttonElement = screen.getByText("Start Battle");
    expect(buttonElement).toBeInTheDocument();
  });

  it("should render the button with enable state", async () => {
    store.dispatch(setSelectedMonster(monstersData.monsters[0]));
    buttonStartBattleFactory();
    const buttonElement = screen.getByText("Start Battle");
    expect(buttonElement).toBeEnabled();
  });

  it("should click the button to start the battle", async () => {
    store.dispatch(setSelectedMonster(monstersData.monsters[0]));
    store.dispatch(setSelectedComputerMonster(monstersData.monsters[1]));
    buttonStartBattleFactory();
    const buttonElement = screen.getByText("Start Battle");

    fireEvent.click(buttonElement);

    await waitFor(() => {
      expect(buttonElement).toHaveTextContent("Reset game");
    });

    fireEvent.click(buttonElement);

    await waitFor(() => {
      expect(buttonElement).toHaveTextContent("Start Battle");
    });
  });
});
