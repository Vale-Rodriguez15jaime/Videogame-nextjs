import { store } from "@/store";
import { ButtonStartBattle } from "./ButtonStartBattle";
import { Provider } from "react-redux";
import { render, screen } from "@testing-library/react";
import { setSelectedMonster } from "@/reducers/monsters/monsters.actions";
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
    // @TODO
  });
});
