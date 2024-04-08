import axios from "axios";
import { useState } from "react";


async function getData(url) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [dataFake, setDataFake] = useState([]);
    try {
        let dt = await axios.get(url)
        console.log(">>>>>>>>> check data: ", dt.data)
        setDataFake(dt)
    } catch (error) {
        console.log(error.message)
    }
    return dataFake;
}

export { getData }