const validateMobileNumber = (value) => {
    if (!value) return "This field must not be empty.";

    const regex = /^\d{10}$/;
    if (!regex.test(value)) {
        return "Invalid mobile number";
    }

    return "Valid mobile number";
};
