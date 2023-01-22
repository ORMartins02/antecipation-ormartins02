import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext, ISubmitValue } from "../../context/AuthContext";
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
      <div>
        <h4>Simule sua Antecipação</h4>
        <Form onSubmit={handleSubmit(onSubmitValue)}>
          <div>
            <label htmlFor="amount">Informe o valor da venda *</label>
            <input
              placeholder="R$ 1.000,00"
              id="amount"
              {...register("amount")}
            />
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
            <label htmlFor="mdr">Selecione os períodos desejados</label>
            <select id="days" {...register("days")}>
              <option value=""></option>
              <option value="01, 15, 30">01, 15, 30 dias</option>
              <option value="15, 30">15, 30 dias</option>
              <option value="15, 30, 60">15, 30, 60 dias</option>
              <option value="30, 60">30, 60 dias</option>
              <option value="30, 60, 90">30, 60, 90 dias</option>
              <option value="60, 90">60, 90 dias</option>
            </select>
          </div>
          <button>Simular</button>
        </Form>
      </div>
    </DivForm>
  );
};
