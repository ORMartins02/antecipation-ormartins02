import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

export const ListResult = () => {
  const { antecipationValues, actualResult } = useContext(AuthContext);

  return (
    <>
      <div className="days">
        <h3 className="key">Amanhã: </h3>
        <h3 className="price"> R$ {antecipationValues["1"] | 0},00</h3>
      </div>
      <div className="days">
        <h3 className="key">Em 15 dias: </h3>
        <h3 className="price"> R$ {antecipationValues["15"] | 0},00</h3>
      </div>
      <div className="days">
        <h3 className="key">Em 30 dias: </h3>
        <h3 className="price"> R$ {antecipationValues["30"] | 0},00</h3>
      </div>
      <div className="days">
        <h3 className="key">Em 60 dias: </h3>
        <h3 className="price"> R$ {antecipationValues["60"] | 0},00</h3>
      </div>
      <div className="days">
        <h3 className="key">Em 90 dias: </h3>
        <h3 className="price"> R$ {antecipationValues["90"] | 0},00</h3>
      </div>
    </>
  );
};
