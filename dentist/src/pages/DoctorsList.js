import React, { useState } from "react";

const doctorsData = Array.from({ length: 15 }, (_, i) => ({
  id: i + 1,
  name: `Dr. Doctor ${i + 1}`,
  email: `doctor${i + 1}@clinic.com`,
  profile: `https://i.pravatar.cc/150?img=${i + 10}`
}));

const DoctorsList = () => {
  const [page, setPage] = useState(1);
  const perPage = 5;
  const totalPages = Math.ceil(doctorsData.length / perPage);

  const currentDoctors = doctorsData.slice(
    (page - 1) * perPage,
    page * perPage
  );

  return (
    <div>
      <h2 className="mb-4">Our Doctors</h2>
      <div className="row">
        {currentDoctors.map((doc) => (
          <div className="col-md-6 mb-3" key={doc.id}>
            <div className="card p-3 d-flex flex-row align-items-center">
              <img
                src={doc.profile}
                alt={doc.name}
                className="rounded-circle me-3"
                width="60"
                height="60"
              />
              <div>
                <h5>{doc.name}</h5>
                <p className="text-muted">{doc.email}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="d-flex justify-content-between align-items-center mt-3">
        <button
          disabled={page === 1}
          onClick={() => setPage(page - 1)}
          className="btn btn-outline-primary"
        >
          Prev
        </button>
        <span>Page {page} of {totalPages}</span>
        <button
          disabled={page === totalPages}
          onClick={() => setPage(page + 1)}
          className="btn btn-outline-primary"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default DoctorsList;
