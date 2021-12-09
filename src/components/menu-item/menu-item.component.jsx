import "./menu-item.styles.scss";

const MenuItem = ({ title, imageUrl, size }) => (
  <div
    style={{ backgroundImage: `url(${imageUrl})` }}
    className={`menu-item ${size ? size : ""}`}
  >
    <div className="content">
      <h1 className="title">{title.toUpperCase()}</h1>
      <span className="subtitle">SHOP NOW</span>
    </div>
  </div>
);

export default MenuItem;
