import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

export const ListResult = () => {
  const { antecipationValues } = useContext(AuthContext);

  return (
    <>
      <div className="days">
        <h3 className="key">Amanhã: </h3>
        <h3 className="price"> R$ {antecipationValues["1"]},00</h3>
      </div>
      <div className="days">
        <h3 className="key">Em 15 dias: </h3>
        <h3 className="price">R$ {antecipationValues["15"]},00</h3>
      </div>
      <div className="days">
        <h3 className="key">Em 30 dias: </h3>
        <h3 className="price">R$ {antecipationValues["30"]},00</h3>
      </div>
      <div className="days">
        <h3 className="key">Em 90 dias: </h3>
        <h3 className="price">R$ {antecipationValues["90"]},00</h3>
      </div>
    </>
  );
};
