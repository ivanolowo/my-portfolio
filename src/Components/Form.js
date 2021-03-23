import React, { useState } from 'react'
import FormSuccess from './FormSuccess'
import Contact from './Contact'

const Form = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);

    function submitForm() {
        setIsSubmitted(true);
    }
    return (
        <div>
            {!isSubmitted ? (
                <Contact submitForm={submitForm} />) :
                (<FormSuccess />)}
        </div>
    );
};

export default Form;