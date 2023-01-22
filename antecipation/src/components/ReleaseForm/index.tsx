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
        <Form onChange={handleSubmit(onSubmitValue)}>
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
        </Form>
      </div>
    </DivForm>
  );
};
