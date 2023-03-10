import { PHONE, TEXT, EMAIL } from "./constant";

export type formStepType = {
  id: number,
  sideBar: string,
  header: string,
  content: string
}[];


export type personalFieldsType = {
  id: string,
  field: string,
  placeholder: string,
  fieldType: typeof PHONE | typeof TEXT  | typeof EMAIL
  isRequired: boolean
}[]

export type selectFieldType = {
  switch: {
    unit: string,
    name: string,
    title: string
  }[],
  selections: {
    id: number,
    title: string,
    content: string,
    price: number[],
  }[]
}

export type pickFieldType = {
  id: number,
  price: number[],
  title: string,
  content: string
}[]

export type doneMessageType = string;
