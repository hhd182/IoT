/* eslint-disable react/prop-types */
import { FaTemperatureLow, FaRegLightbulb } from "react-icons/fa";
import { FaDroplet } from "react-icons/fa6";
import { setColorTemp, setColorHum, setColorLight } from "../../logic/SetColor";

function Enity(props) {
    const { data } = props;
    let colorTemp = setColorTemp(data.temp)
    let colorHum = setColorHum(data.hum)
    let colorLight = setColorLight(data.light)

    return (
        <>
            <div className='temp flex justify-center items-center shadow-sm flex-col rounded-2xl h-44 gap-y-3 transi'
                style={{ backgroundImage: `linear-gradient(to top right, #f7e9e9, ${colorTemp})` }}>
                <FaTemperatureLow className='text-red-600 text-6xl' />
                <p className="title mr-5 text-2xl text-[#333] font-bold">
                    <span>{data.temp}</span>
                    <span>℃</span>
                </p>
            </div >

            <div className=' hum flex justify-center items-center shadow-sm flex-col rounded-2xl h-44 gap-y-3'
                style={{ backgroundImage: `linear-gradient(to top right, #d6d5fd, ${colorHum})` }}>
                <FaDroplet className='text-blue-900 text-6xl' />
                <p className="title mr-5 text-2xl text-[#333] font-bold">
                    <span>{data.hum}</span>
                    <span>%</span>
                </p>
            </div>

            <div className='light flex justify-center items-center shadow-sm flex-col rounded-2xl h-44 gap-y-3'
                style={{ backgroundImage: `linear-gradient(to top right, #fafdeb, ${colorLight})` }}>
                <FaRegLightbulb className='text-yellow-600 text-6xl' />
                <p className="title mr-5 text-2xl text-[#333] font-bold">
                    <span>{data.light}</span>
                    <span>℃</span>
                </p>
            </div>
        </>
    )
}

export default Enity;