import Week from "./Week"
import { addWeeks } from "./TimeTravel";
import { isDateSuccess, changeDateSuccess } from "./CalHandler";
import {useReducer} from 'react';

function App() {
  const ACTIONS = {
    TOGGLE_DATE: "toggle-date"
  }
  const today = new Date();
  const range = [-3,-2,-1,0,1,2,3,4,5,]

  const reducer = (cal, action) => {
    switch (action.type) {
        case ACTIONS.TOGGLE_DATE:
            return changeDateSuccess(cal, action.date);
        default:
            return cal;
    }
  }
  const checkSuccess = (date) => {
      return isDateSuccess(cal, date);
  }
  const initialDict = {}
  const [cal, dispatch] = useReducer(reducer, initialDict)
  const handleClick = (date)  => {
    dispatch({type: ACTIONS.TOGGLE_DATE, date: date})
  }

  return (
    <div className="App">
        <h1> Hello world!</h1>
        {range.map((index) => {
          return (
            <Week 
              key = {index /*TODO: switch to a datestring of the sunday in that week or something*/}
              date={addWeeks(today, index)}
              onClick = {handleClick}
              checkSuccess = {checkSuccess}
            />
          )
        })}
    </div>
  );
}
export default App;
