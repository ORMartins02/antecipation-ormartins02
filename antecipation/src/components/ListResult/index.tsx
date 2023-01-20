import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

export const ListResult = () => {
  const { antecipationValues } = useContext(AuthContext);

  return (
    <>
      
      <div className="days" key={}>
        <h3 className="">Amanhã: </h3>
        <h3>{antecipationValues[1]}</h3>
      </div>
      <div className="days">
        <h3 className="">Em 15 dias: </h3>
        <h3>{antecipationValues[15]}</h3>
      </div>
      <div className="days">
        <h3 className="">Em 30 dias: </h3>
        <h3>{antecipationValues[30]}</h3>
      </div>
      <div className="days">
        <h3 className="">Em 90 dias: </h3>
        <h3>{antecipationValues[90]}</h3>
      </div>
    </>
  );
};
