import type { formStepType } from "../type";
import type { selectedStepType } from "../useMultiStepForm";

type props = {
  formStep: formStepType,
  selectedStep: selectedStepType
}


const Sidebar = ({
  formStep,
  selectedStep
}: props) => {
  return (
    <div className="md:bg-sidebar-desktop bg-sidebar-mobile bg-cover object-cover 
      bg-center w-full md:w-[270px] md:rounded-md md:px-6 mobile:h-[200px]"
      >
        <div className="p-5 flex md:inline w-full items-center justify-center">
          {
            formStep.map(({id, sideBar}, index) => (
              <div className="flex my-6 mx-4" key={id+1}>
                <span className={`
                  ${selectedStep === id ? 'bg-light-gray text-black' : 'text-light-gray'}
                  w-9 h-9 rounded-full border-2 border-light-gray
                  flex items-center justify-center`}>{index+1}</span>
                <div className='hidden md:inline ml-4'>
                  <div className='text-xs font-light text-light-gray'>{`STEP ${index+1}`}</div>
                  <div className='text-white'>{sideBar}</div>
                </div>
              </div>
            ))
          }
        </div>
    </div>
  );
};

export default Sidebar