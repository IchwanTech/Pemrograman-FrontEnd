import React from "react";
import { FaSearch } from "react-icons/fa";

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="mx-auto position-relative" style={{ maxWidth: "500px" }}>
      <div className="input-group">
        <input
          type="text"
          className="form-control form-control-lg"
          placeholder="Cari Pesantren..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ borderRadius: "50px 0 0 50px", paddingLeft: "20px" }}
        />
        <span
          className="input-group-text"
          style={{
            backgroundColor: "#166534",
            borderRadius: "0 50px 50px 0",
            border: "none",
          }}
        >
          <FaSearch className="text-white" />
        </span>
      </div>
    </div>
  );
};

export default SearchBar;
