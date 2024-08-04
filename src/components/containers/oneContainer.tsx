import { useState } from "react";
import Image from "next/image";
import ButtonConnect from "../buttons/buttonConnect";
import AvatarConnect from "../avatars/avatarConnect";

interface ConnectedViewProps {
    onDisconnect: React.MouseEventHandler<HTMLButtonElement>;
}

interface NotConnectedViewProps {
    onConnect: React.MouseEventHandler<HTMLButtonElement>;
}


export default function OneContainer() {
    const [isConnected, setIsConnected] = useState(false);

    const handleConnect: React.MouseEventHandler<HTMLButtonElement> = () => {
        setIsConnected(true);
    };

    const handleDisconnect: React.MouseEventHandler<HTMLButtonElement> = () => {
        setIsConnected(false);
    };


    return (
        <div className="h-screen w-screen flex flex-col items-center justify-center bg-gradient-to-br from-white via-gray-300 to-gray-100">
            {isConnected ? (
                <ConnectedView onDisconnect={handleDisconnect} />
            ) : (
                <NotConnectedView onConnect={handleConnect} />
            )}
        </div>
    )
}

const NotConnectedView: React.FC<NotConnectedViewProps> = ({ onConnect }) => {
    return (
        <>
            <div className="h-[80px] w-3/4 md:w-1/2 lg:w-1/4 bg-gray-800 rounded-[24px] shadow-lg flex items-center justify-center mb-4">
                <div className="text-white text-center text-base font-sans font-light">
                    Welcome to another side of Wave, Wave Connect.
                </div>
            </div>

            <div className="flex flex-col items-center justify-center h-[380px] w-3/4 md:w-1/2 lg:w-1/4 bg-gray-800 rounded-[24px] shadow-lg p-4">
                <AvatarConnect />

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

                <ButtonConnect onConnect={onConnect} />
            </div>
        </>
    );
}

const ConnectedView: React.FC<ConnectedViewProps> = ({ onDisconnect }) => {
    return (
        <div className="flex flex-col items-center justify-center h-auto w-3/4 md:w-2/3 lg:w-1/3 bg-gray-800 rounded-[24px] shadow-lg p-4">
            <div className="flex flex-col items-center">
                <AvatarConnect />
                <div className="text-white text-xl font-semibold mb-1">
                    Your Ethereum
                </div>
                <div className="text-blue-400 text-sm font-semibold mb-1">
                    VERIFIED
                </div>
                <div className="text-white font-light text-sm text-center mb-4">
                    You can check your ETH address & your ethereum balance
                </div>
                <button
                    onClick={onDisconnect}
                    className="group relative inline-flex items-center justify-center h-[48px] rounded-full bg-red-600 border border-red-500 text-white font-medium py-1 px-6 overflow-hidden"
                >
                    <div className="relative flex items-center justify-center h-full px-6 text-gray-50 transition-transform duration-500 group-hover:translate-y-[-150%]">
                        Disconnect
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center h-full transition-transform duration-500 group-hover:translate-y-0">
                        <span className="absolute inset-0 bg-red-800 transition-transform duration-500 transform -translate-y-full scale-0 group-hover:translate-y-0 group-hover:scale-150"></span>
                        <span className="relative">Disconnect</span>
                    </div>
                </button>
            </div>

            <div className="w-full bg-gray-900 p-4 rounded-lg mt-4">
                <div className="text-white text-sm font-semibold mb-2">Wallet Details</div>
                <div className="bg-gray-800 p-2 rounded-md mb-2 text-gray-300">
                    Ethereum
                </div>
                <div className="bg-gray-800 p-2 rounded-md mb-2 text-gray-300 break-all text-xs">
                    0xc67c60cdd682fcb2f6ca9a58e462f80443e32683gd7a
                </div>
                <div className="bg-gray-800 p-2 rounded-md text-gray-300">
                    Balance | 0.000033509672348 ETH
                </div>
            </div>
        </div>
    );
}