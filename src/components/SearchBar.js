import { useState } from 'react';

function SearchBar({ onSubmit }) {
    const [term, setTerm] = useState('');

    const handleFromSubmit = (event) => {   //form 提交函数
        event.preventDefault();
        onSubmit(term)       // 调用父组件传过来的函数和参数
    };

    const handleChange = (event) => {     // input 提交函数
        setTerm(event.target.value);
    };

    return (
        <div>
            <form onSubmit={handleFromSubmit} >
                <input value={term} onChange={handleChange} />
            </form>
        </div>
    )
}

export default SearchBar;