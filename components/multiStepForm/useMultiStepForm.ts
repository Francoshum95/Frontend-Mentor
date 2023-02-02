import { useState, useMemo } from 'react';
import * as constant from './constant';
import { formStepType, personalFieldsType, pickFieldType, selectFieldType } from './type';

export type isLoadingType = boolean;
export type selectedStepType = number;
export type onChangeSelectedFormStepType = (direction: string) => void;
export type onChangeFormAnswerType = ({id, value}: {id: string, value: string}) => void;
export type onChangeUniteSwitchType = () => void;
export type onSelectFieldSelectType = (id:number) => void;
export type onChangePickAnswerType = (id: number) => void;
export type formType = {[id: string]: string}
export type fieldAnswerType = {unit: typeof constant.FIRSTSELECT |
   typeof constant.SECONDSELECT, id: number}
export type pickAnswerType = number[];

type useMultiStepFormType = ({
  personalFields,
  selectField,
  pickField
}: {
  personalFields: personalFieldsType,
  selectField: selectFieldType,
  pickField: pickFieldType
}) => {
  isLoading: isLoadingType,
  selectedStep: selectedStepType,
  formAnswer: formType,
  formError: formType,
  fieldAnswer: fieldAnswerType,
  pickAnswer: pickAnswerType,
  onChangeFormAnswer: onChangeFormAnswerType
  onChangeSelectedFormStep: onChangeSelectedFormStepType,
  onSelectFieldSelect: onSelectFieldSelectType,
  onChangeUniteSwitch: onChangeUniteSwitchType,
  onChangePickAnswer: onChangePickAnswerType
}

type getDefaultFormType = (personalFields: personalFieldsType) => {[id: string]: string};

type validateFormType = ({
  personalFields,
  formAnswer
}: {
  personalFields: personalFieldsType,
  formAnswer: formType
}) => {
  isError: boolean,
  formError: {[id: string]: string}
};

export const getDefaultForm:getDefaultFormType = (personalFields) => {
  const form: formType = {};

  personalFields.forEach(({id}) => {
    form[id] = ""
  })

  return form
}; 

const validateForm:validateFormType = ({
  personalFields, 
  formAnswer
}) => {
  const formError:formType = {}
  let isError = false;

  personalFields.forEach(({
    id, fieldType, isRequired
  }) => {
    if (isRequired && !formAnswer[id]){
      isError = true;
      formError[id] = "This field is required"
    } 

    if (fieldType === 'email'){
      if (!constant.REGEX.test(formAnswer[id])){
        isError = true;
        formError[id] = "The Email Format is Invalid"
      }
    }
  });

  return {
    isError,
    formError
  }

};

const useMultiStepForm:useMultiStepFormType = ({
  personalFields,
  selectField,
  pickField
}) => {
  const defaultForm =  useMemo(() => getDefaultForm(personalFields), []);

  const [isLoading, setIsLoading] = useState<isLoadingType>(false)
  const [selectedStep, setSelectedStep] = useState<selectedStepType>(constant.CHECKOUTSTEP);
  const [formAnswer, setFormAnswer] = useState<formType>(defaultForm);
  const [fieldAnswer, setFieldAnswer] = useState<fieldAnswerType>({
    unit: constant.FIRSTSELECT, id: selectField.selections[0].id
});
  const [pickAnswer, setPickAnswer] = useState<pickAnswerType>([]);
  const [formError, setFormError] = useState<formType>(defaultForm);

  const onChangeFormAnswer:onChangeFormAnswerType = ({id, value}) => {
    const newFormAnswer = {... formAnswer}

    newFormAnswer[id] = value
    setFormAnswer(newFormAnswer)
  };
  
  const onChangeSelectedFormStep: onChangeSelectedFormStepType = (direction) => {
    if (direction === constant.BACK && 
      selectedStep !== constant.FORMSTEP
      ){
      setSelectedStep((prevState) => prevState - 1)
    };

    if (direction === constant.NEXT){
      if (selectedStep === constant.FORMSTEP){
        const {isError, formError} = validateForm({
          personalFields, formAnswer
        });

        if (isError){
          setFormError(formError)
        } else {
          setSelectedStep((prevState) => prevState + 1)
          setFormError(defaultForm)
        }
      } else {
        setSelectedStep((prevState) => prevState + 1)
      }
    }
  }; 

  const onSelectFieldSelect:onSelectFieldSelectType = (id) => {
    const cloneFieldAnswer = {...fieldAnswer}
    cloneFieldAnswer.id = id
    setFieldAnswer(cloneFieldAnswer)
  };

  const onChangeUniteSwitch:onChangeUniteSwitchType = () => {
    const cloneFieldAnswer = {...fieldAnswer}
    

    if (fieldAnswer.unit === constant.FIRSTSELECT){
      cloneFieldAnswer.unit = constant.SECONDSELECT
    } else {
      cloneFieldAnswer.unit = constant.FIRSTSELECT
    }

    setFieldAnswer(cloneFieldAnswer)
  };

  const onChangePickAnswer:onChangePickAnswerType = (id) => {
    const clonePickAnswer = [...pickAnswer];

    if (pickAnswer.includes(id)){
      const index = pickAnswer.indexOf(id)
      clonePickAnswer.splice(index, 1);
    } else {
      clonePickAnswer.push(id)
    }

    setPickAnswer(clonePickAnswer)
  }

  
  return {
    isLoading, 
    selectedStep,
    formAnswer,
    formError,
    fieldAnswer,
    pickAnswer,
    onChangeFormAnswer,
    onChangeSelectedFormStep,
    onSelectFieldSelect,
    onChangeUniteSwitch,
    onChangePickAnswer
  }
};

export default useMultiStepForm