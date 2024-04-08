/* eslint-disable react/prop-types */
import ButtonDataSenSor from "./ButtonDataSensor";
import TableData from "./TableData";
import DotPage from "./DotPage";
import './datasensor.scss'

function DataSensor(props) {
    const { dataSensor } = props;

    return (
        <div className=" datasensor-container bg-[#f9fafb] mt-14 pt-10 w-full max-w-[112rem]">
            <ButtonDataSenSor dataSensor={dataSensor} />
            <TableData />
            <DotPage />
        </div>
    )
}

export default DataSensor;