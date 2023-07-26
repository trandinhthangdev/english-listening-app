import { useState } from "react";
import { BsPrinterFill } from "react-icons/bs";
import LogoIcon from "./assets/logo.png";
const App = (props) => {
    const [data, setData] = useState(require("./data/data.json"));
    const [categoryActive, setCategoryActive] = useState(null);
    const [categoryPrintView, setCategoryPrintView] = useState(null);
    const [opisodeActive, setOpisodeActive] = useState(null);
    if (opisodeActive) {
        return (
            <div className="h-[100vh] bg-white text-gray-800 p-4 flex flex-col">
                <div className="flex flex-col items-center">
                    <div
                        className="flex flex-col items-center p-1 cursor-pointer"
                        onClick={() => setOpisodeActive(null)}
                    >
                        <img className="w-[36px] h-[36px]" src={LogoIcon} />
                        <div className="text-sm font-bold">
                            English Vocabulary App
                        </div>
                        <div className="text-xs italic">@trandinhthangdev</div>
                    </div>
                    <div className="flex-1 pr-2 font-bold text-3xl p-2 text-center">
                        {opisodeActive.title}
                    </div>
                    <div className="pb-2">
                        <audio controls autoPlay>
                            <source
                                src={opisodeActive.audio}
                                type="audio/mpeg"
                            />
                        </audio>
                    </div>
                </div>
                <div className="flex-1 overflow-y-auto">
                    {opisodeActive.content.map((itemP) => {
                        return <p>{itemP}</p>;
                    })}
                </div>
            </div>
        );
    }
    if (categoryPrintView) {
        return (
            <div className="min-h-[100vh] bg-white text-gray-800 p-4">
                <div
                    className="flex flex-col items-center p-1 cursor-pointer"
                    onClick={() => setCategoryPrintView(null)}
                >
                    <img className="w-[36px] h-[36px]" src={LogoIcon} />
                    <div className="text-sm font-bold">
                        English Vocabulary App
                    </div>
                    <div className="text-xs italic">@trandinhthangdev</div>
                </div>
                <div className="flex-1 pr-2 font-bold text-3xl p-2 text-center">
                    {categoryPrintView.title}
                </div>
                <table>
                    <tbody>
                        {categoryPrintView.episodes.map((itemOp) => {
                            return (
                                <>
                                    <tr>
                                        <td
                                            colSpan={2}
                                            className="text-center font-bold text-xl p-4"
                                        >
                                            {itemOp.title}
                                        </td>
                                    </tr>
                                    <tr className="">
                                        <td className="border p-4">
                                            {itemOp.content.map((itemP) => {
                                                return <p>{itemP}</p>;
                                            })}
                                        </td>
                                    </tr>
                                </>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        );
    }
    return (
        <div className="h-[100vh] bg-white text-gray-800 flex flex-col">
            <div className="flex flex-col items-center p-1">
                <img className="w-[36px] h-[36px]" src={LogoIcon} />
                <div className="text-sm font-bold">English Vocabulary App</div>
                <div className="text-xs italic">@trandinhthangdev</div>
            </div>

            <div className="flex-1 overflow-y-auto">
                {data.map((item, index) => {
                    return (
                        <div>
                            <div
                                onClick={() => {
                                    setCategoryActive((prev) =>
                                        prev === item.code ? null : item.code
                                    );
                                }}
                                className="flex items-center border-b border-b-blue-200"
                            >
                                <div className="flex-1 pr-2 font-bold text-lg cursor-pointer p-2 hover:text-blue-600">
                                    {item.title}
                                </div>
                                <div
                                    className="p-2 text-blue-400 cursor-pointer hover:text-blue-600"
                                    onClick={(event) => {
                                        event.stopPropagation();
                                        setCategoryPrintView(item);
                                    }}
                                >
                                    <BsPrinterFill />
                                </div>
                            </div>
                            {item.code === categoryActive ? (
                                <div className="pl-4">
                                    {item.episodes.map((itemOp) => {
                                        return (
                                            <div
                                                className="italic py-2 hover:text-blue-400 cursor-pointer"
                                                onClick={() => {
                                                    setOpisodeActive(itemOp);
                                                }}
                                            >
                                                {itemOp.title}
                                            </div>
                                        );
                                    })}
                                </div>
                            ) : (
                                <></>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
export default App;
