import { Pagination } from 'antd';
import { useState } from 'react';

function DotPage() {
    const [current, setCurrent] = useState(1);

    const onChange = (page) => {
        console.log(page);
        setCurrent(page);
    };

    return (
        <div className='flex w-full items-center justify-center mt-4'>
            <Pagination current={current} onChange={onChange} total={50} />
        </div>
    )
}

export default DotPage;

