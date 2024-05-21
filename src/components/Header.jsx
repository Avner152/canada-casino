import logo from "../assets/logo.jpg";

export default function Header() {
  return (
    <header className="header ">
      <div className="fw-bold d-flex align-items-center ps-4 fs-2 text-uppercase">
        <span>Top</span>
        <img height={110} src={logo} />
        <span>canada</span>
      </div>
    </header>
  );
}
