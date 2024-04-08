import axios from "axios";
const URL_GET = ""
const URL_SEARCH = ""

async function getData(value) {
    try {
        let data = await axios.get(URL_GET, value)
    } catch (e) {
        console.log("Erro: ", e.message);
    }
}


async function searchData(value) {
    try {
        let data = await axios.get(URL_SEARCH, value)
    } catch (e) {
        console.log("Erro: ", e.message);
    }
}

export { getData, searchData }