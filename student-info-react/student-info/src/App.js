import React, { useState } from "react";
import StudentTable from "./components/StudentTable";
import StudentForm from "./components/StudentForm";
import SearchBar from "./components/SearchBar";

function App() {
  const [students, setStudents] = useState([
    { id: 1, name: "Nguyễn Văn A", major: "CNTT", gpa: 3.2 },
    { id: 2, name: "Trần Thị B", major: "KTPM", gpa: 3.6 },
    { id: 3, name: "Lê Văn C", major: "KHMT", gpa: 2.9 },
  ]);

  const [search, setSearch] = useState("");

  const handleAddStudent = (newStudent) => {
    setStudents([...students, { id: Date.now(), ...newStudent }]);
  };

  const handleDeleteStudent = (id) => {
    setStudents(students.filter((s) => s.id !== id));
  };

  const filtered = students.filter(
    (s) =>
      s.name.toLowerCase().includes(search.toLowerCase()) ||
      s.major.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h1>Bảng thông tin sinh viên</h1>
      <SearchBar value={search} onChange={setSearch} />
      <StudentTable students={filtered} onDelete={handleDeleteStudent} />
      <StudentForm onAdd={handleAddStudent} />
    </div>
  );
}

export default App;
