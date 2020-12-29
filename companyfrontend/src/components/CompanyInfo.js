import { Button } from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router-dom";
import auth from "../util/AuthHandler";
import "./css/CompanyInfo.css";
function CompanyInfo({
  info: { email = "xyz@email.com", name = "XYZ", phoneNo = "9248293xxxx" },
}) {
  const signOut = () => {
    auth.signOut();
    history.push("/login");
  };
  const history = useHistory();
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
            onClick={signOut}
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
