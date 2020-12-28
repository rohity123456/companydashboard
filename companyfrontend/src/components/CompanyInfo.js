import { Button } from "@material-ui/core";
import React from "react";
import "./css/CompanyInfo.css";
function CompanyInfo({
  info: { email = "xyz@email.com", name = "XYZ", phoneNo = "9248293xxxx" },
}) {
  return (
    <div className="companyInfo">
      <header>
        <h3>Welcome, {name}</h3>
        <div className="contactInfo">
          <div>
            <p>{email}</p>
            <p>{phoneNo}</p>
          </div>
          <Button
            variant="contained"
            color="primary"
            size="small"
            className="btn"
          >
            Sign Out
          </Button>
        </div>
      </header>
    </div>
  );
}

export default CompanyInfo;
