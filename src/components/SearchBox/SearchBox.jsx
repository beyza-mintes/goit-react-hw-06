import React from 'react'
import styles from './SearchBox.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter, selectNameFilter } from '../../redux/filtersSlice';

const SearchBox = () => {
    const dispatch = useDispatch();
    const filterValue = useSelector(selectNameFilter);

    const handleChange = (e) => {
        dispatch(changeFilter(e.target.value));
    };


    return (
        <div className={styles.searchbox}>
            <label>Find contacts by name</label>
            <input
                type='text'
                value={filterValue}
                onChange={handleChange}
            />
        </div>
    );
};

export default SearchBox;