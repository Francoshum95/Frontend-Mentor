export type formStepType = {
  id: number,
  sideBar: string,
  header: string,
  content: string
}[];


export type personalFieldsType = {
  id: number,
  field: string,
  placeholder: string,
  fieldType: string,
  isRequired: boolean
}[];

export type selectFieldType = {
  switch: {
    unit: string,
    name: string,
  }[],
  seletions: {
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
