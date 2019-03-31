/**
 * Footer is where we let the user change currently visible todos.
 */

import React from 'react';
import FilterLinks from '../containers/FilterLinks';
import { VisibilityFilters } from '../store/actions';

const Footer = () => (
  <div>
    <span>Show: </span>
    <FilterLinks filter={VisibilityFilters.SHOW_ALL}>All </FilterLinks>
    <FilterLinks filter={VisibilityFilters.SHOW_ACTIVE}>Active </FilterLinks>
    <FilterLinks filter={VisibilityFilters.SHOW_COMPLETED}>Completed </FilterLinks>
  </div>

)

export default Footer