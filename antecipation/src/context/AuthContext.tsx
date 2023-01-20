import { ReactNode, createContext, useState } from "react";
import api from "../services/api";

export interface ISubmitValue {
  amount: number;
  installments: number;
  mdr: number;
  days: string;
}

interface IAuthProviderProps {
  children: ReactNode;
}

interface IResultAntecipationValues {
  Amanhã: number;
  "15": number;
  "30": number;
  "60": number;
  "90": number;
}

export interface IAuthContext {
  onSubmitValue: (data: ISubmitValue) => void;
  antecipationValues: IResultAntecipationValues;
  antecipationListKeys: string[];
  antecipationListValues: number[];
}

export const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export const AuthProvider = ({ children }: IAuthProviderProps) => {
  const objectData = { Amanhã: 0, "15": 0, "30": 0, "60": 0, "90": 0 };
  const objectKeys = Object.keys(objectData);
  const objectValues = Object.values(objectData);

  const [antecipationValues, setAntecipationValues] =
    useState<IResultAntecipationValues>(objectData);
  const [antecipationListKeys, setAntecipationListKeys] =
    useState<string[]>(objectKeys);
  const [antecipationListValues, setAntecipationListValues] =
    useState<any[]>(objectValues);

  const onSubmitValue = async (data: ISubmitValue) => {
    const { amount, installments, mdr, days } = data;

    let daysArr = days.split(", ");

    let newData = {};

    if (days.length === 0) {
      newData = { amount, installments, mdr };
    } else {
      newData = { amount, installments, mdr, days: daysArr };
    }

    await api
      .post("", { ...newData })
      .then((response) => {
        setAntecipationValues(response.data);
        let keys = Object.keys(response.data);
        let values = Object.values(response.data);

        keys.forEach((e, i) => {
          keys[i] = `Em ${e}`;
        });

        if (keys[0] === "Em 1") {
          keys[0] = "Amanhã";
        }

        setAntecipationListKeys(keys);
        setAntecipationListValues(values);

        console.log(keys, values);
        console.log(response.data);
      })
      .catch((response) => {
        console.error(response);
      });
  };

  return (
    <AuthContext.Provider
      value={{
        onSubmitValue,
        antecipationValues,
        antecipationListKeys,
        antecipationListValues,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
