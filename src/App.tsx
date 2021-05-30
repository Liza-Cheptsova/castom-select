import { DetailedHTMLProps, MouseEventHandler, useState } from "react";
import "./App.css";

function App() {
  const [editMode, setEditMode] = useState<boolean>(false);
  const [selectesOption, setSelectedOption] = useState<any>(null);

  const options = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const setOptionHandler = (value: number) => () => {
    setSelectedOption(value);
    setEditMode(false);
  };

  const setEditModeHandler = () => {
    setEditMode(!editMode);
  };

  return (
    <div className='select-container'>
      <div className='select-head' onClick={setEditModeHandler}>
        <span>{selectesOption || 0}</span>
      </div>
      {editMode && (
        <div className='options'>
          {options.map((option: any, index) => (
            //@ts-ignore
            <span onClick={setOptionHandler(option)} key={index}>
              {option}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
