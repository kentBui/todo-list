import React from "react";

export default function SortAndSearch() {
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
                <a className="dropdown-item" href="#">
                  Name ASC
                </a>
                <a className="dropdown-item" href="#">
                  Name DESC
                </a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#">
                  Level ASC
                </a>
                <a className="dropdown-item" href="#">
                  Level DESC
                </a>
              </div>
              <span className="badge badge-success badge-medium">
                NAME - DESC
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
            />
            <span className="input-group-append">
              <button className="btn btn-info" type="button">
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
