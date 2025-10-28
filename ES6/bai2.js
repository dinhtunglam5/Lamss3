const users = [
  { name: "An", age: 25 },
  { name: "Bình", age: 17 },
  { name: "Chi", age: 30 },
  { name: "Dũng", age: 20 }
];

// Lọc người từ 18 tuổi trở lên
const adults = users.filter(user => user.age >= 18);

// Sắp xếp theo tuổi tăng dần
const sorted = adults.sort((a, b) => a.age - b.age);

// In ra danh sách tên
const names = sorted.map(user => user.name);

console.log("Danh sách người dùng:", names);
