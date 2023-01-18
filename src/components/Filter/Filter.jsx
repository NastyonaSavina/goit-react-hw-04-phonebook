import styles from '../Filter/Filter.module.css';


export const Filter = ({ value, onChange }) => {
 
    return (
      <>
        <label htmlFor="search" className={styles.label}> Find contacts by name</label>
           <input
          type="text"
          className={styles.searchForm}
          placeholder="Search contact name"
          value={value}
          name="filter"
          id= "search"
          onChange={onChange}
        />
         
      </>      
    );
  }
