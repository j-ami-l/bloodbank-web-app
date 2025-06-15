import { useState } from "react";

const useInputField = (defaultValue) => {
    const [fieldValue , setfieldValue] = useState(defaultValue)

    const handelFieldOnChange = e => {
        setfieldValue(e.target.value)
    }

    return [fieldValue , handelFieldOnChange];
}


export default useInputField;