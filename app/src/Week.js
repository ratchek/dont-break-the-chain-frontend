import Day from './Day';
import { addDays, getSundayBefore } from './TimeTravel';

const Week = (props) => {
  function clickHandler() {
    if (isSuccess) {setIsSuccess(false)}
    else {setIsSuccess(true)}
  }

  const range = [0,1,2,3,4,5,6]
  let sunday = getSundayBefore(props.date)
  return (
    <div className="week"> 
      {range.map((index) => {
        return (
          <Day 
            key = {index.toString()}
            sunday = {sunday}
            date={ addDays(sunday, index) }
            clickHandler = {clickHandler}
            isSucces
          />
        )  
      })}
    </div>
  );
}

export default Week;
