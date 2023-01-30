import Sidebar from "./components/Sidebar"
import useMultiStepForm from "./hooks/useMultiStepForm"
export type formStepType = {
  id: number,
  sideBar: string,
  header: string,
  content: string
}[]

export type propsType = {
  formStep: formStepType,
  personalFields: {
    id: number,
    field: string,
    placeholder: string,
    fieldType: "text" | "email" | "phone",
    isRequired: boolean
  }[],
  selectField: {
    switch: [{
      unit: string,
      name: string,
    }, {
      unit: string,
      name: string,
    }]
    seletions: {
      id: number,
      title: string,
      price: [number, number],
    }[]
  },
  pickField: {
    id: number,
    price: [number, number],
    title: string,
    content: string
  }
}

const MultiStepForm = (props:propsType) => {
  const { formStep, personalFields, selectField, pickField } = props;
  const {selectedFormStep} = useMultiStepForm();

  return (
    <div className='bg-magnoxlia min-h-full flex mobile:flex-col
      md:items-center md:justify-center h-screen
    '>
      <div className="rounded-md md:bg-white md:m-6 md:flex md:h-[600px] md:p-4
        md:max-w-[1440px]">
        <Sidebar
          formStep={formStep}
          selecatedFormStep={selectedFormStep}
        />
        <div className="flex flex-col mobile:justify-center mobile:items-center">
          <div className="mobile:w-[90%] mobile:bg-white mobile:rounded-md mobile:relative top-[-86px] mobile:max-w-[430px]
           z-[999] mobile:px-6 mobile:py-8 mobile:shadow-md md:px-[4rem] md:pb-[3rem] md:pt-[3rem] mobile:p-3">
            <>
              <h1 className="font-bold text-2xl md:text-3xl text-marine-blue">{steps[formStep -1]['header']}</h1>
              <p className="text-cool-gray mt-2 font-thin leading-7">{steps[formStep -1]['content']}</p>
            </>
          {RenderMap[formStep]}
          </div>
          <Controller
            isLoading={isLoading}
            formStep={formStep}
            onChangeStep={onChangeStep}
          />
        </div>
      </div>
    </div>

  )




};

export default MultiStepForm