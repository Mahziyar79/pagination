const Pagination = ({ totalPost, postPerPage, changePage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPost / postPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="paigination">
        {pageNumbers.map((number, index) => (
          <li onClick={() => changePage(number)} key={index}>
            <button>{number}</button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
