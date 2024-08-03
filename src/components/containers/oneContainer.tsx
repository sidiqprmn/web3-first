import MainContainer from "./mainContainer";

export default function OneContainer() {
    return (
        <div className="h-screen w-screen flex flex-col items-center justify-center bg-gradient-to-br from-white via-gray-300 to-gray-100">
            <div className="h-[80px] w-3/4 md:w-1/2 lg:w-1/4 bg-gray-800 rounded-[24px] shadow-lg flex items-center justify-center mb-4">
                <div className="text-white text-center text-base font-sans font-light">
                    Welcome to another side of Wave, Wave Connect.
                </div>
            </div>

            <MainContainer />
        </div>
    )
}