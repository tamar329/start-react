import React, {useState} from "react";

export default function Toggle() {
    const [showInfo, setShowInfo] = useState(false);

    const onShowInfo = () => {
        setShowInfo(!showInfo)
    }

    const para2 = () => {
        return <p className="'text-danger">
            para 2 something para 2 something
        </p>
    }

    return (
        <div className="container">
            <h2>Info about somthing</h2>
            <button onClick={onShowInfo}>{(showInfo) ? "hide" : "show"}</button>
            {/* {
                (showInfo) ? <p>
                    huk b  uky kugulyu gt uhy6ihlurh5il  
                </p>
            } */}
            {
                showInfo && <p>jio hio, ,bil uli uil uh;iho ;i</p>
            }
            {
                para2()
            }
        </div>
    )



}