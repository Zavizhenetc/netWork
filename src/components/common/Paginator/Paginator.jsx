import React, {useState} from 'react';
import styles from './Paginator.module.css';
import cn from 'classnames';

const Paginator = ({totalItemsCount, pageSize, currentPage, onPageChanged, portionSize = 10}) => {
  let pagesCount = Math.ceil(totalItemsCount / pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  const portionCount = Math.ceil(pagesCount / portionSize);
  const [portionNumber, setPortionNumber] = useState(1);
  const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
  const rightPortionPageNumber = portionNumber * portionSize;

  return (
    <div className={styles.pagesNums}>
      {portionNumber > 1 &&
      <button onClick={() => {
        setPortionNumber(portionNumber - 1)
      }}> &larr; </button>}

      {pages.filter(p => p >= leftPortionPageNumber &&
        p <= rightPortionPageNumber)
        .map((p) => {
          /* использовал библиотеку classnames */
          return <span className={cn({[styles.selectedPage]: currentPage === p}, styles.pageNum)}
            /*    className={currentPage === p ? `${styles.selectedPage} ${styles.pageNum}` : `${styles.pageNum}`}*/
                       key={p} onClick={(e) => {
            onPageChanged(p)
          }}>
    {p} </span>
        })}

      {portionCount > portionNumber &&
      <button onClick={() => {
        setPortionNumber(portionNumber + 1)
      }
      }> &rarr; </button>}
    </div>
  )
}
export default Paginator;