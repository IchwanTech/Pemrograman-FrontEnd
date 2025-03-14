import { NavLink, useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>404 Halaman tidak ditemukan</h1>
      <p>Opps... halaman yang anda cari tidak ditemukan</p>
      <button onClick={() => navigate(-1)}>Kembali</button>
      <br />
      <NavLink to="/">Kembali ke halaman utama</NavLink>
    </div>
  );
};

export default ErrorPage;
