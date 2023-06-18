import React from "react";

export default function ListEmp(props) {
    return (
        <div>
            <h2>List of emplyeesL {props.ListEmp}</h2>
            <div className="row">
                {props.ar.map(item => {
                    return (
                        <ItemEmp key={item.email} item={item} />
                    )
                })}
            </div>
        </div>
    )
}