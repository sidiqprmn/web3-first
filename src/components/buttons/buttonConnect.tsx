import React from "react";

interface ButtonConnectProps {
  onConnect: React.MouseEventHandler<HTMLButtonElement>;
}

const ButtonConnect: React.FC<ButtonConnectProps> = ({ onConnect }) => {
    return (
        <button
            onClick={onConnect}
            className="group relative inline-flex items-center justify-center h-[48px] rounded-full bg-gray-800 border border-gray-700 text-white font-medium py-1 px-6 overflow-hidden"
        >
            <div className="relative flex items-center justify-center h-full px-6 text-gray-50 transition-transform duration-500 group-hover:translate-y-[-150%]">
                Connect Wallet
            </div>
            <div className="absolute inset-0 flex items-center justify-center h-full transition-transform duration-500 group-hover:translate-y-0">
                <span className="absolute inset-0 bg-blue-500 transition-transform duration-500 transform -translate-y-full scale-0 group-hover:translate-y-0 group-hover:scale-150"></span>
                <span className="relative">Connect Wallet</span>
            </div>
        </button>
    );
}

export default ButtonConnect;