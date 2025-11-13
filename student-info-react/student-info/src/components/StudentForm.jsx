import React, { useState } from "react";

const StudentForm = ({ onAdd }) => {
  const [form, setForm] = useState({ name: "", major: "", gpa: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.major) return alert("Vui lòng nhập đầy đủ thông tin");
    onAdd(form);
    setForm({ name: "", major: "", gpa: "" });
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: 20 }}>
      <input
        name="name"
        placeholder="Họ và tên"
        value={form.name}
        onChange={handleChange}
      />
      <input
        name="major"
        placeholder="Ngành"
        value={form.major}
        onChange={handleChange}
      />
      <input
        name="gpa"
        type="number"
        step="0.01"
        placeholder="GPA"
        value={form.gpa}
        onChange={handleChange}
      />
      <button type="submit">Thêm sinh viên</button>
    </form>
  );
};

export default StudentForm;
