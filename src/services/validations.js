// TODO: Add here the function to validate
const isValid = (label) => {
    return (
        label.length >= 8 &&
        /[0-9]/.test(label) &&
        /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(label)
    );
};
const isEmpty = (label) => !label || label.length === 0;

exports.isEmpty = isEmpty;
exports.isValid = isValid;
