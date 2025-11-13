import React from "react";

const StudentTable = ({ students, onDelete }) => {
  return (
    <table border="1" width="100%" cellPadding="10">
      <thead>
        <tr>
          <th>ID</th>
          <th>Họ tên</th>
          <th>Ngành học</th>
          <th>GPA</th>
          <th>Hành động</th>
        </tr>
      </thead>
      <tbody>
        {students.map((s) => (
          <tr key={s.id}>
            <td>{s.id}</td>
            <td>{s.name}</td>
            <td>{s.major}</td>
            <td>{s.gpa}</td>
            <td>
              <button onClick={() => onDelete(s.id)}>Xóa</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default StudentTable;
