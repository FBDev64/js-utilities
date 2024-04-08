const validateEmail = (value) => {
    if (!value) return "This field must not be empty.";

    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(value)) {
        return "Invalid email";
    }

    return "Valid email";
};
