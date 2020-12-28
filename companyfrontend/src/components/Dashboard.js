import React, { useEffect, useState } from "react";
import { useStateValue } from "../context/StateContext";
import HF from "../Helper/Helper";
import BE from "../util/backend";
import company from "../util/Company";
import CompanyInfo from "./CompanyInfo";
import "./css/Dashboard.css";
import { actionTypes } from "../context/reducer";
import Grid from "./Grid";
import SearchAndAdd from "./SearchAndAdd";
function Dashboard() {
  useEffect(() => {
    async function getEmployeeList() {
      const companyInfo = company.getCompanyInfo();
      const { _id } = companyInfo;
      const URI = `/company/${_id}/employees`;
      const token = HF.getItemFromLocalStorage("token");
      const { success, data } = await BE.customFetch(URI, token);

      success &&
        data.then(({ employeeList }) => {
          if (employeeList) {
            // console.log(employeeList);
            employeeList = employeeList.map((emp, idx) => {
              emp.id = emp._id;
              return emp;
            });
            dispatch({
              type: actionTypes.SET_EMPLOYEELIST,
              payload: employeeList,
            });
          }
        });
      setCompanyInfo(companyInfo);
    }
    getEmployeeList();
  }, []);
  const [companyInfo, setCompanyInfo] = useState(null);
  const [{ Employees }, dispatch] = useStateValue();
  return (
    <div className="dashboard">
      <CompanyInfo info={companyInfo || {}} />
      <SearchAndAdd />
      <Grid rows={Employees || []} />
    </div>
  );
}

export default Dashboard;
