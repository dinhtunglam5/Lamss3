import React, { useState } from "react";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Email: ${email}\nPassword: ${password}\nRemember: ${remember}`);
  };

  return (
    <div className="d-flex align-items-center justify-content-center vh-100 bg-light">
      <div
        className="bg-white p-4 rounded shadow"
        style={{ width: "100%", maxWidth: "380px" }}
      >
        <h1 className="h3 mb-3 fw-normal text-center">Đăng nhập</h1>

        <form onSubmit={handleSubmit}>
          <div className="form-floating mb-3">
            <input
              type="email"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label htmlFor="floatingInput">Địa chỉ email</label>
          </div>

          <div className="form-floating mb-3">
            <input
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Mật khẩu"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <label htmlFor="floatingPassword">Mật khẩu</label>
          </div>

          <div className="checkbox mb-3">
            <label>
              <input
                type="checkbox"
                checked={remember}
                onChange={(e) => setRemember(e.target.checked)}
              />{" "}
              Ghi nhớ đăng nhập
            </label>
          </div>

          <button className="w-100 btn btn-lg btn-primary" type="submit">
            Đăng nhập
          </button>

          <p className="mt-3 mb-1 text-center text-muted">© 2025</p>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
