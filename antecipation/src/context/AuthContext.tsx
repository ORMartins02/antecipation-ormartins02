import { ReactNode, createContext, useState } from "react";
import api from "../services/api";

interface IAntecipationData {
  amount: number;
  installments: number;
  mdr: number;
}

export interface ISubmitValue {
  amount: number;
  installments: number;
  mdr: number;
}

export interface IResponse {
  "1": number;
  "15": number;
  "30": number;
  "60": number;
  "90": number;
}

interface IAuthProviderProps {
  children: ReactNode;
}

export interface IAuthContext {
  onSubmitValue: (data: ISubmitValue) => void;
  antecipationValues: IResponse;
}

export const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export const AuthProvider = ({ children }: IAuthProviderProps) => {
  const values = { "1": 0, "15": 0, "30": 0, "60": 0, "90": 0 };

  const [antecipationData, setAntecipationData] = useState<IAntecipationData>();
  const [antecipationValues, setAntecipationValues] =
    useState<IResponse>(values);

  const onSubmitValue = async (data: ISubmitValue) => {
    await api
      .post("", { ...data })
      .then((response) => {
        setAntecipationValues(response.data);
        console.log(response.data);
      })
      .catch((response) => {
        console.error(response);
      });
  };

  return (
    <AuthContext.Provider value={{ onSubmitValue, antecipationValues }}>
      {children}
    </AuthContext.Provider>
  );
};
