import Image from "next/image";
import ButtonConnect from "../buttons/buttonConnect";
import AvatarConnect from "../avatars/avatarConnect";

export default function MainContainer() {
  return (
    <div className="flex flex-col items-center justify-center h-[380px] w-3/4 md:w-1/2 lg:w-1/4 bg-gray-800 rounded-[24px] shadow-lg p-4">

{/* Tidak digunakan */}
      {/*       <AvatarConnect />

      <div className="text-white text-xl font-semibold mb-4">
        Connect Please!!
      </div>

      <div className="relative w-24 h-24 mb-4">
        <Image
          src="/logo/Ethereum-icon-purple.svg.png"
          alt="Example Image"
          layout="fill"
          objectFit="contain"
        />
      </div>

      <div className="text-white font-extralight text-md text-center mb-4">
        To join us, connect your Metamask wallet first.
      </div>

      <ButtonConnect /> */}

      
    </div>
  );
}
