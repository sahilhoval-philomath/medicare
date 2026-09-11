import "./header.css";

function Header() {
  return (
    <header>
      <input
        type="text"
        placeholder="Search patient by name, record no or phone..."
      />

      <div className="header-right">

        {/* Notification */}
        <button className="notification">
          <img
            src="/src/assets/notification.png"
            alt="Notification"
          />
        </button>

        {/* Profile */}
        <button className="profile">
          <div className="profile-circle">
            RJ
          </div>

          <div className="profile-info">
            <strong>Rohan Jamdade</strong>
            <span>Administrator</span>
          </div>

          <span className="profile-arrow">▼</span>
        </button>

      </div>
    </header>
  );
}

export default Header;