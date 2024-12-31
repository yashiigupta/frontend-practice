import React from 'react';
import styles from '../styles/grid.module.css';

const Grid = (props) => {
  const matrix = [];
  const row = [...Array(Number(props.col))].map((_, i) => i);
  for(let i = 0; i < Number(props.row); i++) {
    matrix.push(row);
  }
  return (
    <div className={styles.grid}>
      {matrix.map((row, i) => (
        <div key = {i} className={styles.row}>
          {row.map((_, j) => (
            <div key = {j} className={styles.block} style={{ backgroundColor: `${(i + j) % 2 === 0 ? "black" : "white"}`}}>
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}

export default Grid