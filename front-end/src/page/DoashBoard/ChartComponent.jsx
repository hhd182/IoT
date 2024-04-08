/* eslint-disable react/prop-types */
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

function ChartComponent(props) {
    let { listData } = props;

    return (
        <ResponsiveContainer width="100%" height="100%">
            <LineChart
                width={500}
                height={300}
                data={listData}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="time" />
                <YAxis />
                <Tooltip />
                <Legend verticalAlign="top" />
                <Line type="monotone" dataKey="temp" stroke="#eb0f0f" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="hum" stroke="#145ede" />
                <Line type="monotone" dataKey="light" stroke="#efef0a" />
            </LineChart>
        </ResponsiveContainer>
    );
}

export default ChartComponent;
