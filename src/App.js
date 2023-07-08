import SearchBar from './components/SearchBar';
import { useState } from 'react';

function App() {
    const [data, setData] = useState([]);

    const handleSubmit = (term) => {  // 传给子组件函数，term是子组件回传给父组件参数
        // 使用useState数组不可以直接赋值给data，赋值新的updateData，再使用setData
        let updateData = [...data, term];
        setData(updateData);
    };

    const renderedData = data.map((value, index) => {
        return <li key={index}>{value}</li>
    });

    return (
        <div>
            <label>Input string/number/character</label>
            <SearchBar onSubmit={handleSubmit} />
            {/* {console.log(data)} */}
            {/* 数组数据按照每个元素一行逐列显示 */}
            <ul>
                {renderedData}
            </ul>
        </div>
    );
}

export default App;
