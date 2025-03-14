import { useState } from "react";
import { Form, Input, FormGroup, Label } from "reactstrap";

const Search = ({ totalPost, onSearchChange }) => {
  const [search, setSearch] = useState("");

  const handleChangeSearch = (e) => {
    setSearch(e.target.value);
    onSearchChange(e.target.value);
  };

  return (
    <div className="d-flex flex-column align-items-center p-3">
      <Form className="w-100" style={{ maxWidth: "400px" }}>
        <FormGroup>
          <Label for="searchInput" className="fw-bold">
            Cari Artikel:
          </Label>
          <Input
            type="text"
            id="searchInput"
            placeholder="Masukkan kata kunci..."
            value={search}
            onChange={handleChangeSearch}
            className="rounded-pill shadow-sm"
          />
        </FormGroup>
      </Form>
      <small className="text-muted mt-2">
        Ditemukan <b>{totalPost}</b> data dengan pencarian kata{" "}
        <b>{search || "-"}</b>
      </small>
    </div>
  );
};

export default Search;
