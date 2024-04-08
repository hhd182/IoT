import axios from 'axios';

const postData = async () => {
    try {
        const data = {
            dayStart: "03/04/2024",
            dayEnd: "06/04/2024",
            page: 1
        };

        const response = await axios.get('http://localhost:3333/api/action/search', data);
        console.log(response.data); // log response from server
    } catch (error) {
        console.error('Error:', error);
    }
};

postData();
