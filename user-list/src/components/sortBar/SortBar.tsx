import './sortBar.scss';

const SortBar = () => {
  return (
    <div className="sort-buttons">
      <p className="sort-title">Сортировка</p>
      <button>по городу</button>
      <button>по компании</button>
    </div>
  );
};

export default SortBar;
