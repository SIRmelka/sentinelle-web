import React, { useState } from "react";

export default function NavigationButton({ label, icon, selected }) {
  const [toast, setToast] = useState(false);
  const showToast = () => {
    setToast(true);
    setTimeout(() => {
      setToast(false);
    }, 3000);
  };
  return (
    <div
      className={`navigationButton ${selected && "selected"}`}
      onClick={() => showToast()}
    >
      {icon}
      <p className="test" style={selected && { fontSize: 12 }}>
        {label}
      </p>
      {toast && (
        <div className="toast toast-start">
          <div className="alert alert-info">
            <div>
              <span style={{ fontSize: "15px" }}>
                Cette fonctionnalité n'est disponible que sur l'application
                mobile
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
