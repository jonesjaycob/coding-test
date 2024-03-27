import React from 'react'
import {entries} from "./library";

const AutoComplete = () => {
const [options, setOptions] = React.useState([]);
const [inputValue, setInputValue] = React.useState('');

  const onChange = (e) => {

    setInputValue(e.currentTarget.value);
    const options = entries.filter(
        (option) =>
          option.title.toLowerCase().indexOf(inputValue.toLowerCase()) > -1
      );
    setOptions(options);
  }

  const onClick = (e) => {
      setOptions([]);
      setInputValue(e.currentTarget.innerText);
  };

    return (
        <>
        <input
            type="text"
            className="search-box"
            onChange={onChange}
            value={inputValue}
            placeholder='Search...'
          />
          { options.length ? (
                <ul>
                {options.map((option, index) => {
                    return (
                        <li key={index} onClick={onClick}>
                            {option.title}
                        </li>
                    );
                })}
            </ul>
        ) : (
            <div>
                <p>No Options</p>
            </div>
        )}
        </>
    );
}
export default AutoComplete;