import Image from "next/image";

export default function AvatarConnect() {
    return(
        <div className="relative w-24 h-24 bg-gray-700 rounded-full flex items-center justify-center overflow-hidden mb-1">
        <Image
          src="/avatar/ava1.jpg"
          alt="Avatar"
          layout="fill"
          objectFit="cover"
        />
      </div>
    );
}