import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '../../redux/contacts/contactsAction';
import { getFilters } from '../../redux/contacts/contactsSelector';
import { FilterStyled } from './FilterStyled';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilters);
  const onChange = e => {
    dispatch(changeFilter(e.target.value));
  };
  return (
    <FilterStyled>
      <label className="labelFilter">
        Find contacts by name:
        <input
          className="inputFilter"
          type="text"
          name="filter"
          value={filter}
          onChange={onChange}
        />
      </label>
    </FilterStyled>
  );
};

export default Filter;
