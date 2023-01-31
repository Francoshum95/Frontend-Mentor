import { useState, useMemo } from 'react';
import * as constant from './constant';
import { formStepType, personalFieldsType } from './type';


export type isLoadingType = boolean;
export type selectedStepType = number;
export type onChangeSelectedFormStepType = (direction: string) => void;
export type onChangeFormAnswerType = ({id, value}: {id: number, value: string}) => void;
export type formType = {[id: number]: string}

type useMultiStepFormType = ({
  formStep,
  personalFields
}: {
  formStep: formStepType,
  personalFields: personalFieldsType
}) => {
  isLoading: isLoadingType,
  selectedStep: selectedStepType,
  formAnswer: formType,
  formError: formType
  onChangeFormAnswer: onChangeFormAnswerType
  onChangeSelectedFormStep: onChangeSelectedFormStepType
}

type getDefaultFormType = (formStep: formStepType) => {[id: number]: string};

type validateFormType = ({
  personalFields,
  formAnswer
}: {
  personalFields: personalFieldsType,
  formAnswer: formType
}) => {
  isError: boolean,
  formError: {[id: number]: string}
};

const getDefaultForm:getDefaultFormType = (formStep) => {
  const form: formType = {};

  formStep.forEach(({id}) => {
    form[id] = ""
  })

  return form
}; 

const validateForm:validateFormType = ({
  personalFields, formAnswer
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
  formStep,
  personalFields
}) => {
  const defaultForm =  useMemo(() => getDefaultForm(formStep), []);

  const [isLoading, setIsLoading] = useState<isLoadingType>(false)
  const [selectedStep, setSelectedStep] = useState<selectedStepType>(constant.INFOSTEP);
  const [formAnswer, setFormAnswer] = useState<formType>(defaultForm);
  const [formError, setFormError] = useState<formType>(defaultForm);

  const onChangeFormAnswer:onChangeFormAnswerType = ({id, value}) => {
    const newFormAnswer = {... formAnswer}

    newFormAnswer[id] = value
    setFormAnswer(newFormAnswer)
  };
  
  const onChangeSelectedFormStep: onChangeSelectedFormStepType = (direction) => {
    if (direction === constant.BACK){
      setSelectedStep((prevState) => prevState - 1)
    };

    if (direction === constant.NEXT){
      if (selectedStep === constant.INFOSTEP){
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


  return {
    isLoading, 
    selectedStep,
    formAnswer,
    formError,
    onChangeFormAnswer,
    onChangeSelectedFormStep
  }
};

export default useMultiStepForm