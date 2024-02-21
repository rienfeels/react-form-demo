import { useState } from "react";

const MyForm = ({ action }) => {
  const [myInput, setMyInput] = useState("");
  const [mySecondInput, setMySecondInput] = useState("");
  const [someText, setSomeText] = useState("");
  const [someMoreText, setSomeMoreText] = useState("");

  const handleChange = (e) => {
    setMyInput(e.target.value);
  };

  const handleSecondChange = (e) => {
    setMySecondInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // action(myInput);
    setSomeText(myInput);
    setSomeMoreText(mySecondInput);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        My Input
        <input
          type="text"
          name="myInput"
          value={myInput}
          onChange={handleChange}
        />
      </label>
      <label>
        My Second Input
        <input
          type="text"
          name="mySecondInput"
          value={mySecondInput}
          onChange={handleSecondChange}
        />
      </label>
      <button type="submit">Submit Stuff</button>
    </form>
  );
};

export default MyForm;
