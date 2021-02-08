import React, { useState } from 'react'
import { useUserData } from "../contexts/UserDataContext"
import "../styles/styles.css"
import { OverlayTrigger, Tooltip } from "react-bootstrap"

export default function MoneyBlock({ props }) {

    const [value, setValue] = useState(0)
    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            Value: {value}
        </Tooltip>
    );

    return (
        <OverlayTrigger placement="top" delay={{ show: 250, hide: 400 }} overlay={renderTooltip} >
            <div class="moneyblock" style={{ backgroundColor: "blue" }}></div>
        </OverlayTrigger>
    )
}
