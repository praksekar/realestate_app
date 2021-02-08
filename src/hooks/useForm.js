import { useState } from 'react'

export const useForm = (initialValues) => {

    const [values, setValues] = useState(initialValues);

    return [values, e => {
        values.[e.target.name].value = e.target.value
        setValues({ ...values })
    }]
}



