import { useState } from "react";

export default function AppDate() {
    const [deadline, setDeadline] = useState("2023-01-01");

    return (
        <div className="container">
            {/* <DateView deadLine={deadline}/>
            <DateInput serDeadLine={setDeadline}/> */}
        </div>
    )
}