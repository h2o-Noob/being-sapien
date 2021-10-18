import ReportsContext from "./reportsContext";
import { useState } from "react";

const ReportsState = (props)=>{
    
    const s1 = []

    const [reports, setReports] = useState(s1)

    const addReports = (x)=>{

        const report = {
            "name": x.name,
            "email": x.email,
            "animal": x.animal,
            "aid": x.aid,
            "info": x.info,
            "location": x.location
        }

        setReports(reports.concat(report))
    }
    
    return(
        <ReportsContext.Provider value={{reports, addReports}}>
            {props.children}
        </ReportsContext.Provider>
    )
}

export default ReportsState