import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './page/Header/Header.jsx';
import Dashboard from './page/DoashBoard/DoashBoard.jsx';
import DataSensor from './page/DataSensor/DataSensor.jsx';
import ActionHistory from './page/ActionHistory/ActionHistory.jsx';
import { useState } from 'react';

function App() {

    const [dataSensor, setDataSensor] = useState([]);

    return (
        <>
            <Router>
                <div className=" flex justify-center ">
                    <Header />
                    <Routes>
                        <Route path="/" element={<Dashboard setDataSensor={setDataSensor} />} />
                        <Route path="/datasensor" element={<DataSensor dataSensor={dataSensor} />} />
                        <Route path="/actionhistory" element={<ActionHistory dataSensor={dataSensor} />} />
                    </Routes>
                </div>
            </Router>
        </>
    )
}

export default App;