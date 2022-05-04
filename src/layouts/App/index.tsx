import { FC } from "react";
import { setupIonicReact } from "@ionic/react";
import { useCrud } from "../../hooks/useCrud";
import { db } from "../../utils/firebase";
import { Submission } from "../../types/submission";

setupIonicReact();

const App:FC = () => {

  const { addOne, addMany } = useCrud<Submission>(db, 'submissions');

  const handleAddOne = () => {
    addOne({value: "1"})
  }

  const handleAddMany= () => {
    addMany([
      {value: "1"},
      {value: "1"},
      {value: "1"},
      {value: "1"},
      {value: "1"},
    ])
  }

  return (
    <div>
      <p>this</p>
      <button onClick={handleAddOne}>ADD ONE</button>
      <button onClick={handleAddMany}>ADD MANY</button>
    </div>
  )
};

export default App;