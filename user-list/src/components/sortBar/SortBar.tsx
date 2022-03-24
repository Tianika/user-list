import { MouseEventHandler } from 'react';
import './sortBar.scss';

const SortBar = (props: {
  sortByCity: MouseEventHandler<HTMLButtonElement>;
  sortByCompany: MouseEventHandler<HTMLButtonElement>;
}) => {
  const { sortByCity, sortByCompany } = props;

  return (
    <div className="sort-buttons">
      <p className="sort-title">Сортировка</p>
      <button onClick={sortByCity}>по городу</button>
      <button onClick={sortByCompany}>по компании</button>
    </div>
  );
};

export default SortBar;
