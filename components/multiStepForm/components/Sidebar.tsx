import { formStepType } from "..";

type props = {
  formStep: formStepType,
  selecatedFormStep: any
}


const Sidebar = ({
  formStep,
  selecatedFormStep
}: props) => {
  return (
    <div className="md:bg-sidebar-desktop bg-sidebar-mobile bg-cover object-cover 
      bg-center w-full md:w-[270px] md:rounded-md md:px-6 mobile:h-[200px]"
      >
        <div className="p-5 flex md:inline w-full items-center justify-center">
          {
            formStep.map(({id, sideBar}) => (
              <div className="flex my-6 mx-4" key={id}>
                <span className={`
                  ${selecatedFormStep === id ? 'bg-light-gray text-black' : 'text-light-gray'}
                  w-9 h-9 rounded-full border-2 border-light-gray
                  flex items-center justify-center`}>{id}</span>
                <div className='hidden md:inline ml-4'>
                  <div className='text-xs font-light text-light-gray'>{`STEP ${id}`}</div>
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