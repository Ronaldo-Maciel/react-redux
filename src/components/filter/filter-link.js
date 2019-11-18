import React from 'react';
import styles from './index.module.scss';

const FilterLink = ({ action, children, activeFilter, onClick }) => {
  const hasActiveFilter = activeFilter === action;
  const span = { tag: 'span' };
  const button = { tag: 'button', onClick };
  const component = hasActiveFilter ? span : button;

  return (
    <component.tag
      className={styles['item']}
      onClick={component.onClick}
    >
      {children}
    </component.tag>
  )
};

export default FilterLink;