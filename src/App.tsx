import { useState } from "react";
import s from "./App.module.css";

function App() {
  const [editMode, setEditMode] = useState<boolean>(false);
  const [selectesOption, setSelectedOption] = useState<number | null>(null);
  const [hoveredItemValue, setHoveredItemValue] = useState<any>(null);

  const options = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const hoveredItem = options.find((i) => i === hoveredItemValue);

  const setOptionHandler = (value: number) => () => {
    setSelectedOption(value);
    setEditMode(false);
  };

  const setEditModeHandler = () => {
    setEditMode(!editMode);
  };

  return (
    <div className={s.select_container}>
      <div className={s.select_head + " " + (editMode ? s.active : "")} onClick={setEditModeHandler}>
        <span>{selectesOption || 0}</span>
        <span className={s.arrow + " " + (editMode ? s.up : "")}>&#9660;</span>
      </div>
      {editMode && (
        <div className={s.options + " " + (editMode ? s.active : "")}>
          {options.map((option: number, index) => (
            //@ts-ignore
            <span
              onMouseEnter={() => {
                setHoveredItemValue(option);
              }}
              onClick={setOptionHandler(option)}
              key={index}
              className={s.item + " " + (hoveredItem === option ? s.active : "")}
            >
              {option}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
