import {useState} from 'react';
import './App.css';


function SearchBar({data}) {
const [query, setQuery] = useState("");
const [filteredData, setFilteredData] = useState([]);

const handleSearch = (event) => {
const searchTerm = event.target.value.toLowerCase();
setQuery(searchTerm);

const filtered = data.filter((item) => 
    item.toLowerCase().includes(searchTerm)
);
setFilteredData(filtered);
};

return (
<div className='search-container'>
    <input type="text" value={query} onChange={handleSearch} className='search-input' />
    <ul className='search-results'>
        {query && (filteredData.length > 0 ? (
            filteredData.map((item, index) => <li key={index}>{item}</li>)
         ) : (
            <li>Niciun rezultat gasit</li>
            )
        )}
      
    </ul>

</div>
);

}

export default SearchBar;