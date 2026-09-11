import { useState } from "react";
import "./home.css";

function Home() {

  const [isEditing, setIsEditing] = useState(false);

  const [notes, setNotes] = useState(
    "Remember to review\nRahul Sharma's X-ray.\n\nFollow up with\ntomorrow's RCT patients."
  );

  const noteCount = notes
    .split("\n\n")
    .filter(note => note.trim() !== "")
    .length;

  return (
    <div className="home">

      <section className="welcome-card">
        <div className="welcome-text">
          <h2 className="greeting">Good Morning, Rohan</h2>
          <h1>Welcome to Medicare</h1>
          <p className="subtitle">
            Manage your healthcare easily.
          </p>
        </div>
      </section>

      <section className="dashboard-cards">
        <div className="dashboard-card patients-card">
          <div className="card-content">
            <p className="card-title">Total Patients</p>
            <h2>1,248</h2>
            <p className="card-growth">↑ 12%</p>
            <span>vs last month</span>
          </div>
        </div>

        <div className="dashboard-card appointments-card">
          <div className="card-content">
            <p className="card-title">Today's Appointments</p>
            <h2>18</h2>
            <p className="card-growth">↑ 3</p>
            <span>6 Completed&nbsp;&nbsp;|&nbsp;&nbsp;12 Upcoming</span>
          </div>
        </div>

        <div className="dashboard-card treatments-card">
          <div className="card-content">
            <p className="card-title">Active Treatments</p>
            <h2>42</h2>
            <p className="card-growth">↑ 5</p>
            <span>In Progress</span>
          </div>
        </div>

        <div className="dashboard-card revenue-card">
          <div className="card-content">
            <p className="card-title">Revenue (This Month)</p>
            <h2>₹1,28,500</h2>
            <p className="card-growth">↑ 18%</p>
            <span>vs last month</span>
          </div>
        </div>
      </section>

<div className="main-dashboard">

  <section className="appointments-section">

    <div className="section-header">
      <h2>Today's Appointments</h2>
      <a href="#">View All</a>
    </div>

    <div className="appointments-list">

      <div className="appointment">
        <div className="appointment-time">09:00 AM</div>
        <div className="appointment-dot"></div>
        <div className="appointment-info">
          <h3>Amar Kulkarni</h3>
          <p>General Consultation</p>
        </div>
        <span className="status checked">Checked In</span>
      </div>

      <div className="appointment">
        <div className="appointment-time">09:30 AM</div>
        <div className="appointment-dot green"></div>
        <div className="appointment-info">
          <h3>Akshay Patil</h3>
          <p>Scaling & Cleaning</p>
        </div>
        <span className="status consultation">In Consultation</span>
      </div>

      <div className="appointment">
        <div className="appointment-time">10:00 AM</div>
        <div className="appointment-dot gray"></div>
        <div className="appointment-info">
          <h3>Niranjan Deshmukh</h3>
          <p>Root Canal Treatment</p>
        </div>
        <span className="status scheduled">Scheduled</span>
      </div>

      <div className="appointment">
        <div className="appointment-time">11:00 AM</div>
        <div className="appointment-dot gray"></div>
        <div className="appointment-info">
          <h3>Harshad Jadhav</h3>
          <p>Follow-up</p>
        </div>
        <span className="status scheduled">Scheduled</span>
      </div>


      <div className="appointment">
        <div className="appointment-time">11:30 AM</div>
        <div className="appointment-dot gray"></div>
        <div className="appointment-info">
          <h3>Dhiraj More</h3>
          <p>Tooth Extraction</p>
        </div>
        <span className="status scheduled">Scheduled</span>
      </div>
    </div>

  </section>

  <section className="treatment-overview">

    <div className="section-header">
      <h2>Treatment Overview</h2>

      <select>
        <option>This Month</option>
        <option>Last Month</option>
        <option>This Year</option>
      </select>
    </div>


    <div className="treatment-content">
      <div className="donut-chart">
        <div className="donut-center">
          <h2>42</h2>
          <span>Active</span>
          <span>Treatments</span>
        </div>
      </div>

      <div className="treatment-list">

        <div className="treatment-item">
          <span className="treatment-dot blue"></span>
          <span>General Dentistry</span>
          <strong>14</strong>
        </div>

        <div className="treatment-item">
          <span className="treatment-dot green"></span>
          <span>Root Canal (RCT)</span>
          <strong>8</strong>
        </div>

        <div className="treatment-item">
          <span className="treatment-dot orange"></span>
          <span>Extraction</span>
          <strong>6</strong>
        </div>

        <div className="treatment-item">
          <span className="treatment-dot purple"></span>
          <span>Scaling & Cleaning</span>
          <strong>7</strong>
        </div>

        <div className="treatment-item">
          <span className="treatment-dot gray"></span>
          <span>Others</span>
          <strong>7</strong>
        </div>
      </div>
    </div>
  </section>

  <section className="recent-patients">

    <div className="section-header">
      <h2>Recent Patients</h2>
      <a href="#">View All</a>
    </div>


    <div className="patients-list">
      <div className="patient">
        <div className="patient-avatar">RS
        </div>

        <div className="patient-info">
          <h3>Rahul Sharma</h3>
          <p>#PT-00124</p>
        </div>
        <div className="patient-date">
          <span>Today, 09:15 AM</span>
          <small className="patient-status new">New</small>
        </div>
      </div>


      <div className="patient">
        <div className="patient-avatar">PD</div>
        <div className="patient-info">
          <h3>Pooja Desai</h3>
          <p>#PT-00123</p>
        </div>
        <div className="patient-date">
          <span>Yesterday, 04:20 PM</span>
          <small className="patient-status follow-up">
            Follow-up
          </small>
        </div>
      </div>

      <div className="patient">
        <div className="patient-avatar">SK</div>
        <div className="patient-info">
          <h3>Sandeep Kulkarni</h3>
          <p>#PT-00122</p>
        </div>
        <div className="patient-date">
          <span>Yesterday, 11:10 AM</span>
          <small className="patient-status new">New</small>
        </div>
      </div>


      <div className="patient">
        <div className="patient-avatar">MJ
        </div>
        <div className="patient-info">
          <h3>Meera Joshi</h3>
          <p>#PT-00121</p>
        </div>
        <div className="patient-date">
          <span>26 Aug 2026</span>
          <small className="patient-status follow-up">
            Follow-up
          </small>
        </div>
      </div>

      <div className="patient">
        <div className="patient-avatar">VR</div>
        <div className="patient-info">
          <h3>Vikram Rane</h3>
          <p>#PT-00120</p>
        </div>
        <div className="patient-date">
          <span>26 Aug 2026</span>
          <small className="patient-status treatment">Treatment</small>
        </div>
      </div>
    </div>
  </section>

  <section className="quick-actions">

    <div className="quick-actions-header">
      <h2>Quick Actions</h2>
    </div>

    <div className="quick-actions-list">

      <a href="#" className="quick-action">
        <img src= "src\assets\qa_addpatient.png" alt="Add Patient" />
        <p>Add Patient</p>
      </a>

      <a href="#" className="quick-action">
        <img src= "src\assets\qa_appointment.png" alt="Book Appointment" />
        <p>Book Appointment</p>
      </a>

      <a href="#" className="quick-action">
        <img src= "src\assets\qa_treatment.png" alt="Start Treatment" />
        <p>Start Treatment</p>
      </a>

      <a href="#" className="quick-action">
        <img src= "src\assets\qa_invoice.png" alt="Create Invoice" />
        <p>Create Invoice</p>
      </a>
    </div>
  </section>

<section className="appointment-cta">

  <img
    src="src\assets\calender_appointment.png"
    alt="Appointment"
    className="appointment-bg"
  />

  <div className="cta-content">
    <h2>A well-planned day</h2>
    <p>brings healthier smiles.</p>

    <a href="#" className="cta-button">
      Book an Appointment
    </a>
  </div>
</section>
<section className="doctor-notes">

  <div className="notes-header">
    <h2>Doctor's Notes</h2>

    {!isEditing ? (
      <button
        className="edit-button"
        onClick={() => setIsEditing(true)}
      >
        Edit
      </button>
    ) : (
      <button
        className="save-button"
        onClick={() => setIsEditing(false)}
      >
        Save
      </button>
    )}
  </div>

  {isEditing ? (
    <textarea
      className="notes-input"
      value={notes}
      onChange={(e) => setNotes(e.target.value)}
    />
  ) : (
    <p className="notes-text">{notes}</p>
  )}

  <div className="notes-footer">
    <span>{noteCount} notes pending</span>
  </div>

</section>
</div>
</div>
  );
}

export default Home;