import { useContext } from "react";
import {
  AuthContext,
  IResponse,
} from "../M6/S1/antecipation-ormartins02/antecipation/src/context/AuthContext";
import { ContainerResult } from "../ContainerResult";
import { DivList } from "./style";

export const Result = () => {
  const { antecipationValues } = useContext(AuthContext);

  return (
    <DivList className="lista">
      <h2>VOCÊ RECEBERÁ:</h2>
      <div className="days">
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
    </DivList>
  );
};
