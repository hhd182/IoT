import { SearchOutlined } from '@ant-design/icons'
import DropDownDataSensor from './DropDownDataSensor';
import { useState } from 'react';
import { Input } from 'antd';

function ButtonDataSenSor() {
    const [value, setValue] = useState("All");
    const [searchValue, setSearchValue] = useState('');

    const handleChange = (event) => {
        setSearchValue(event.target.value);
    };

    const handleClickSearch = () => {
        console.log(">>> Check input", searchValue, value);
    }
    return (
        <>
            <div className=' w-[90%] mx-auto flex gap-x-7 bg-white rounded-lg min-h-16 items-center pl-6 shadow-sm'>
                <DropDownDataSensor value={value} setValue={setValue} />
                <div className='flex gap-x-1 w-full'>
                    <Input onChange={handleChange}
                        value={searchValue}
                        allowClear
                        placeholder="Input Search"
                        style={{ maxWidth: "200px" }}
                    />
                    <button className='flex items-center justify-center rounded-md w-10 hover:bg-gray-100'
                        onClick={handleClickSearch}
                    >
                        <SearchOutlined />
                    </button>
                </div>
            </div>
        </>
    )
}

export default ButtonDataSenSor;