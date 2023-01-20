import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { ListResult } from "../ListResult";
import { DivList } from "./style";

export const ContainerResult = () => {
  const { antecipationValues, antecipationListKeys, antecipationListValues } =
    useContext(AuthContext);

  return (
    <DivList className="lista">
      <h2>VOCÊ RECEBERÁ:</h2>
      <ListResult />
    </DivList>
  );
};
