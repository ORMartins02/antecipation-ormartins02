import { ListResult } from "../ListResult";
import { DivList } from "./style";

export const ContainerResult = () => {
  return (
    <DivList className="lista">
      <div>
        <h2>VOCÊ RECEBERÁ:</h2>
        <hr />
        <ListResult />
      </div>
    </DivList>
  );
};
