import "./sidebar.css";
import { Link } from "react-router-dom";
function Sidebar() {
  return (
    <aside className="sidebar">
      <h2>Medicare</h2>
      {/* <p className="subtitle">Healthy Smiles. Brighter Lives.</p> */}

      <div className="menu-item active">
        <img src="/src/assets/home.png" alt="Home" />
        <span>Home</span>
      </div>

      <div className="menu-item">
        <img src="/src/assets/patient-monitor.png" alt="Patients" />
        <span>Patients</span>
      </div>

      <div className="menu-item">
        <img src="/src/assets/online-booking.png" alt="Appointments" />
        <span>Appointments</span>
      </div>

      <div className="menu-item">
        <img src="/src/assets/medical.png" alt="Treatments" />
        <span>Treatments</span>
      </div>

      <div className="menu-item">
        <img src="/src/assets/bill.png" alt="Billing" />
        <span>Billing & Payments</span>
      </div>

      <div className="menu-item">
        <img src="/src/assets/inventory-management.png" alt="Inventory" />
        <span>Inventory</span>
      </div>

      <div className="menu-item">
        <img src="/src/assets/clipboard.png" alt="Reports" />
        <span>Reports</span>
      </div>

      <div className="menu-item">
        <img src="/src/assets/reference.png" alt="Reference Data" />
        <span>Reference Data</span>
      </div>

      <div className="menu-item">
        <img src="/src/assets/service.png" alt="Practice Settings" />
        <span>Practice Settings</span>
      </div>

    </aside>
  );
}

export default Sidebar;