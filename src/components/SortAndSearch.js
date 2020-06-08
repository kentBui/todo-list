import React from "react";

export default function SortAndSearch(props) {
  const { nameSort, searchInput, handleSearch, clear, handleDropdown } = props;

  const dataDropdown = ["Name ASC", "Name DESC", "Level ASC", "Level DESC"];
  return (
    <div className="col-12 col-lg-6">
      <div className="row">
        {/* <!-- SORT : START --> */}
        <div className="col-12">
          <div className="form-group">
            <div className="dropdown">
              <button
                className="btn btn-secondary dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Sort by
              </button>
              <div
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton"
              >
                {dataDropdown.map((item, index) => (
                  <a
                    key={index}
                    className="dropdown-item"
                    href="!#"
                    onClick={() => handleDropdown(item)}
                  >
                    {item}
                  </a>
                ))}
              </div>
              <span className="badge badge-success badge-medium text-uppercase">
                {nameSort}
              </span>
            </div>
          </div>
        </div>
        {/* <!-- SORT : END --> */}

        {/* <!-- SEARCH : START --> */}
        <div className="col-12">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Search for..."
              value={searchInput}
              onChange={handleSearch}
            />
            <span className="input-group-append">
              <button className="btn btn-info" type="button" onClick={clear}>
                Clear!
              </button>
            </span>
          </div>
        </div>
        {/* <!-- SEARCH : END --> */}
      </div>
    </div>
  );
}
