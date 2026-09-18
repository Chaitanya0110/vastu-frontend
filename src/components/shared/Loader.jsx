import { Circles } from "react-loader-spinner";

function Loader({text}) {
    return (
        <div className="flex justify-center items-center w-full h-[450px]">
            <div className="flex flex-col items-center gap-1">
                <Circles
                    height="80"
                    width="80"
                    color= "#808080"
                    ariaLabel="circles-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
                />
                <p className="text-slate-500">{text ? text : "Loading..."}</p>
            </div>
        </div>
    );
};

export default Loader;