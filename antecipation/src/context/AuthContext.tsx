import { ReactNode, createContext, useState, useEffect } from "react";
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
  "1": number;
  "15": number;
  "30": number;
  "60": number;
  "90": number;
}

export interface IAuthContext {
  onSubmitValue: (data: ISubmitValue) => void;
  actualResult: IResultAntecipationValues;
  antecipationValues: IResultAntecipationValues;
}

export const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export const AuthProvider = ({ children }: IAuthProviderProps) => {
  const objectData = { "1": 0, "15": 0, "30": 0, "60": 0, "90": 0 };

  const [antecipationValues, setAntecipationValues] =
    useState<IResultAntecipationValues>(objectData);
  const [actualResult, setActualResult] = useState(objectData);

  useEffect(() => {
    setActualResult(antecipationValues);
  }, [setAntecipationValues]);

  const onCorrectData = (data: ISubmitValue) => {
    const { amount, installments, mdr, days } = data;

    let daysArr = days.split(", ");

    let newData = {};

    if (days.length === 0) {
      newData = { amount, installments, mdr };
    } else {
      newData = { amount, installments, mdr, days: daysArr };
    }
    console.log("onCorr", newData);
    return newData;
  };

  const onSubmitValue = async (data: ISubmitValue) => {
    const newData = onCorrectData(data);

    console.log("onSUB", newData);

    await api
      .post("", { ...newData })
      .then((response) => {
        setAntecipationValues(response.data);
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
        actualResult,
        antecipationValues,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
