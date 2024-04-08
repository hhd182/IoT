import { TreeSelect } from 'antd';
import { useState } from 'react';

const DropDownDataSensor = (props) => {
    const { value, setValue } = props

    let treeData = [
        {
            value: 'all',
            title: 'All',
        },
        {
            value: 'temperature',
            title: 'Temperature',
        },
        {
            value: 'light',
            title: 'Light',
        },
        {
            value: 'humidity',
            title: 'Humidity',
        },
    ]

    const onChange = (newValue) => {
        setValue(newValue);
    }

    return (
        <>
            <TreeSelect
                style={{
                    width: '10%',
                    textAlign: 'center'
                }}
                value={value}
                dropdownStyle={{
                    maxHeight: 400,
                    overflow: 'auto',
                }}
                onChange={onChange}
                treeData={treeData}
                defaultValue="All"
            // defaultOpen='true'
            />
        </>
    );
};
export default DropDownDataSensor;