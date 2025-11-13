import React from "react";

const SearchBar = ({ value, onChange }) => {
  return (
    <input
      type="text"
      placeholder="Tìm kiếm sinh viên..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
      style={{
        padding: "8px",
        marginBottom: "10px",
        width: "100%",
        borderRadius: "5px",
      }}
    />
  );
};

export default SearchBar;
