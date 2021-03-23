export default function vallidateInfo(values) {
    let errors = {}

    if (!values.email) {
        errors.email = "Email required"
    } else if (!/^[A-Z0-9._%+-]+\.[A-Z]{2,}$/i.test(values.email)) {
        errors.email = "Invalid Email Address"
    };

    return errors;
}