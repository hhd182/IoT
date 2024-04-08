/* eslint-disable react/prop-types */
import ButtonActionHistory from "./ButtonActionHistory";
import TableData from "./TableData";
import DotPage from "./DotPage";
import './datasensor.scss'
import { useState } from "react";

function ActionHistory(props) {
    const { dataSensor } = props;

    return (
        <div className=" datasensor-container bg-[#f9fafb] mt-14 pt-10 w-full max-w-[112rem]">
            <ButtonActionHistory
                dataSensor={dataSensor}
            />
            <TableData />
            <DotPage />
        </div>
    )
}

export default ActionHistory;