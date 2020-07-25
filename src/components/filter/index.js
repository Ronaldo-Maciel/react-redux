import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../../redux-flow/reducers/visibility-filter/actions';

import { setVisibilityFilter } from '../../redux-flow/reducers/visibility-filter/actions-creators';
import FilterLink from './filter-link';

const filterItems = [
  { label: 'Todos', action: actions.SHOW_ALL },
  { label: 'Finalizados', action: actions.SHOW_COMPLETED },
  { label: 'A fazer', action: actions.SHOW_ACTIVE }
];

const Filter = () => {
  const activeFilter = useSelector(state => state.visibilityFilter)
  const dispatch = useDispatch()

  const handleFilter = filter => e => {
    e.preventDefault()
    dispatch(setVisibilityFilter(filter))
  }

  return (
  <div>
    <h3>Exibir</h3>
    {filterItems.map((item) => (
      <FilterLink 
        key={item.action}
        action={item.action}
        activeFilter={activeFilter}
        onClick={handleFilter(item.action)}
      >
        {item.label}
      </FilterLink>
    ))}
  </div>
)};

export default Filter;
