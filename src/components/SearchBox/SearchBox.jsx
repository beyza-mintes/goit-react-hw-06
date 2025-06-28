import React from 'react'
import styles from './SearchBox.module.css'

const SearchBox = ({ value, onChange }) => {
    return (
        <div className={styles.searchbox}>
            <label>Find contacts by name</label>
            <input
                type='text'
                value={value}
                onChange={(e) => onChange(e.target.value)}
            />
        </div>
    );
};

export default SearchBox