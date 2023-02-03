import Image from "next/image";
import { doneMessageType } from "../type";


type props = {
  doneMessage: doneMessageType
}

const DoneView = ({
  doneMessage
}: props) => (
  <div className="flex items-center justify-center md:w-[27.1rem] flex-col h-[20rem] md:h-[31rem]">
    <Image
      src={"/asset/icon-thank-you.svg"}
      width={60}
      height={60}
      alt=""
    />
    <h1 className="marine-blue font-bold text-2xl mt-5">Thanks You!</h1>
    <p className="text-center text-sm text-cool-gray mt-4">
      {doneMessage}
    </p>



  </div>

);

export default DoneView