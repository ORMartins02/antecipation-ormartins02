import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext, ISubmitValue } from "../../context/AuthContext";
import { SimulateButton } from "../Button";
import { SelectStyle } from "../Select/style";
import { DivForm, Form } from "./style";

export const ReleaseForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ISubmitValue>();

  const { onSubmitValue } = useContext(AuthContext);

  return (
    <DivForm>
      <h4>Simule sua Antecipação</h4>
      <Form onSubmit={handleSubmit(onSubmitValue)}>
        <div>
          <label htmlFor="amount">Informe o valor da venda *</label>
          <span id="sifrão">R$</span>
          <input placeholder="" id="amount" {...register("amount")} />
        </div>
        <div>
          <label htmlFor="installments">Em quantas parcelas *</label>
          <input
            placeholder=""
            id="installments"
            {...register("installments")}
          />
          <span>Max de 12 parcelas</span>
        </div>
        <div>
          <label htmlFor="mdr">Informe o percentual de MDR *</label>
          <input placeholder="" id="mdr" {...register("mdr")} />
        </div>
        <div>
          <label htmlFor="select">Selecionar os períodos</label>
          <SelectStyle id="select" {...register("days")}>
            <option value=""></option>
            <option value="1, 15">1, 15 dias</option>
            <option value="15, 30">15, 30 dias</option>
            <option value="1, 15, 30">1, 15, 30 dias</option>
            <option value="30, 60">30, 60 dias</option>
            <option value="60, 90">60, 90 dias</option>
            <option value="30, 60, 90">30, 60, 90 dias</option>
          </SelectStyle>
        </div>
        <SimulateButton />
      </Form>
    </DivForm>
  );
};
