/* eslint-disable react/prop-types */
import fanOff from '../../assets/img/fan-image.png'
import fanOn from '../../assets/img/fan.gif'
import lightOff from '../../assets/img/flashlight-image.png'
import lightOn from '../../assets/img/flashlight.gif'

function ButtonComponent(props) {
    const { isFanOn, isLightOn, handleClickFanOn, handleClickFanOff, handleClickLightOn, handleClickLightOff } = props;

    return (
        <>
            <div className='flex justify-center items-center shadow-sm flex-col rounded-2xl h-44 gap-y-3 bg-[#909090]' >
                <img className='transition-all' width={100} src={isFanOn ? fanOn : fanOff} alt="" />
                <div className="flex">
                    <button className={`w-20 h-8 text-[#333] rounded-2xl mx-3 ${isFanOn ? 'bg-[#337e33]' : 'bg-[#d8d8d8]'}`} onClick={() => handleClickFanOn()}>On</button>
                    <button className={`w-20 h-8 text-[#333] rounded-2xl mx-3 ${isFanOn ? 'bg-[#d8d8d8]' : 'bg-[#913232]'}`} onClick={() => handleClickFanOff()}>Off</button>
                </div>
            </div >

            <div className='flex justify-center items-center shadow-sm flex-col rounded-2xl h-44 gap-y-3 bg-[#909090] mt-10' >
                <img className='transition-all' width={100} src={isLightOn ? lightOn : lightOff} alt="" />
                <div className="flex">
                    <button className={`w-20 h-8 text-[#333] rounded-2xl mx-3 ${isLightOn ? 'bg-[#337e33]' : 'bg-[#d8d8d8]'}`} onClick={() => handleClickLightOn()}>On</button>
                    <button className={`w-20 h-8 text-[#333] rounded-2xl mx-3 ${isLightOn ? 'bg-[#d8d8d8]' : 'bg-[#913232]'}`} onClick={() => handleClickLightOff()}>Off</button>
                </div>
            </div>
        </>
    )
}

export default ButtonComponent;