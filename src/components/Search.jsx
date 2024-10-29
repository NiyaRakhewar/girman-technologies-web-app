import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "./ui/input";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import "./../styles/Search.css";
import { SearchContext } from "../context/SearchContext";
export const Search = () => {
  const { search, setSearch } = useContext(SearchContext);

  console.log("=>", search);
  const [inputValue, setInputValue] = useState(search);
  const navigate = useNavigate();

  useEffect(() => {
    setInputValue(search);
  }, [search]);

  const handleSearchChange = (e) => {
    setInputValue(e.target.value);
    if (e.target.value === "") {
      setSearch("");
    }
  };

  const handleSearch = (event) => {
    if (event.key === "Enter") {
      navigate("/results", { state: { searchTerm: inputValue } });
      setSearch(inputValue);
    }
  };

  return (
    <div className="search-input">
      <MagnifyingGlassIcon
        style={{ width: "30px", height: "20px", padding: "2px 5px" }}
      />
      <Input
        type="text"
        value={inputValue}
        onChange={(e) => handleSearchChange(e)}
        onKeyPress={handleSearch}
        placeholder=" Search"
      />
    </div>
  );
};
