import { ReactNode, createContext, useState } from "react";
import api from "../services/api";

export interface ISubmitValue {
  amount: number;
  installments: number;
  mdr: number;
}

interface IAuthProviderProps {
  children: ReactNode;
}

interface IResultAntecipationValues {
  "1": number;
  "15": number;
  "30": number;
  "90": number;
}

export interface IAuthContext {
  onSubmitValue: (data: ISubmitValue) => void;
  antecipationValues: IResultAntecipationValues;
}

export const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export const AuthProvider = ({ children }: IAuthProviderProps) => {
  const objectData = { "1": 0, "15": 0, "30": 0, "90": 0 };

  const [antecipationValues, setAntecipationValues] =
    useState<IResultAntecipationValues>(objectData);

  const onSubmitValue = async (data: ISubmitValue) => {
    if (
      data.amount >= 1000 &&
      data.installments > 0 &&
      data.installments <= 12 &&
      data.mdr > 0
    ) {
      await api
        .post("", { ...data })
        .then((response) => {
          setAntecipationValues(response.data);
        })
        .catch((response) => {
          console.error(response);
        });
    }
  };

  return (
    <AuthContext.Provider
      value={{
        onSubmitValue,
        antecipationValues,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
