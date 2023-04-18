import React from "react";
import classNames from "classnames/dedupe";

const ClassNames = () => {
    return <div className={classNames("foo", "bar", {bar: false, bazz: true})}>HELLO</div>
}

export default ClassNames