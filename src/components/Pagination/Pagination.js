import React from 'react'
import styles from '../../styles/Home.module.css'


const Pagination = ({ items, pageSize, currentPage, onPageChange }) => {

    const pagesCount = Math.ceil(items / pageSize); // 100/10

    if (pagesCount === 1) return null;
    const pages = Array.from({ length: pagesCount }, (_, i) => i + 1);

  console.log('page',pagesCount)

  return (
    <div>
    <ul className={styles.pagination}>
    <li >
        <a className={styles.pageLink} onClick={() => currentPage === 1 ? onPageChange(1) : onPageChange(currentPage - 1)}>
prev
        </a>
      </li>

    {pages.map((page) => (
      <li
        key={page}
        className={
          page === currentPage ? styles.pageItemActive : styles.pageItem
        }
      >
        <a className={styles.pageLink} onClick={() => onPageChange(page)}>
          {page}
        </a>
      </li>
    ))}

    <li>
    <a className={styles.pageLink} onClick={() => currentPage === pagesCount ?  styles.Dnone : onPageChange(currentPage + 1)}>
Next
    </a>
  </li>
  </ul>
    </div>
  )
}

export default Pagination
