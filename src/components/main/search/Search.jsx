import React from 'react';
import { IoSearch } from "react-icons/io5";
import s from './search.module.scss';

const Search = ({theme, handleWords, value, setValue}) => {
  
  return (
    <section className={s.search}>
      <form onSubmit={handleWords}>
        <label className={s.search__label}>
          <input className={`${s.search__input} search__input`} value={value} placeholder='Type in the word...' onChange={(evt) => setValue(evt.target.value)}/>
          <button className={s.search__button} type='submit'>
            <IoSearch className={s.search__icon} size={30} color={theme === 'light' ? 'black' : '#A445ED'}/>
          </button>
        </label>
      </form>
    </section>
  )
}

export default Search;
