import { useState } from "react";
import "./Signup.css";
import { myFormFields } from "../../types";

export const Signup = () => {
    // Define the type for formContent and formErrors to be the same structure
    type FormContent = {
        firstname: string;
        lastname: string;
        phone: string;
        email: string;
        birthdate: string;
    };

    const [formContent, setFormContent] = useState<FormContent>({
        firstname: "",
        lastname: "",
        phone: "",
        email: "",
        birthdate: "",
    });

    const [isSubmitted, setIsSubmitted] = useState(false); // Track if form is submitted

    // Explicitly define formErrors with the same type structure
    const [formErrors, setFormErrors] = useState<FormContent>({
        firstname: "",
        lastname: "",
        phone: "",
        email: "",
        birthdate: "",
    });

    //------------------------------------------------
    const userTypedSomeInfo = (str: string, whichField: myFormFields) => {
        let myUpdatedFormContentObj = { ...formContent, [whichField]: str };
        setFormContent(myUpdatedFormContentObj);
    };

    //------------------------------------------------
    const validateForm = () => {
        // Initialize errors with an empty string for each field
        const errors: FormContent = {
            firstname: "",
            lastname: "",
            phone: "",
            email: "",
            birthdate: "",
        };

        // Basic validation rules
        if (!formContent.firstname) errors.firstname = "First name is required.";
        if (!formContent.lastname) errors.lastname = "Last name is required.";
        if (!formContent.phone) {
            errors.phone = "Phone number is required.";
        } else if (!/^\d{10}$/.test(formContent.phone)) {
            errors.phone = "Phone number must be 10 digits.";
        }
        if (!formContent.email) {
            errors.email = "Email is required.";
        } else if (!/\S+@\S+\.\S+/.test(formContent.email)) {
            errors.email = "Email is invalid.";
        }
        if (!formContent.birthdate) errors.birthdate = "Birthdate is required.";

        setFormErrors(errors);

        // If there are any errors, return false to prevent submission
        return Object.keys(errors).every((key) => errors[key as keyof FormContent] === "");
    };

    //------------------------------------------------
    const userClickedSubmit = () => {
        if (validateForm()) {
            setIsSubmitted(true);
            setFormContent({ firstname: "", lastname: "", phone: "", email: "", birthdate: "" }); // Clear form
        } else {
            setIsSubmitted(false); // Prevent success message if form is invalid
        }
    };

    //------------------------------------------------

    return (
        <div className="Signup">
            <div>
                <input
                    type="text"
                    placeholder="first name"
                    value={formContent.firstname}
                    onChange={(e) => {
                        userTypedSomeInfo((e.target as HTMLInputElement).value, "firstname");
                    }}
                />
                {formErrors.firstname && <div className="error">{formErrors.firstname}</div>}
                <input
                    type="text"
                    placeholder="last name"
                    value={formContent.lastname}
                    onChange={(e) => {
                        userTypedSomeInfo((e.target as HTMLInputElement).value, "lastname");
                    }}
                />
                {formErrors.lastname && <div className="error">{formErrors.lastname}</div>}
            </div>

            <div>
                <input
                    type="text"
                    placeholder="phone"
                    value={formContent.phone}
                    onChange={(e) => {
                        userTypedSomeInfo((e.target as HTMLInputElement).value, "phone");
                    }}
                />
                {formErrors.phone && <div className="error">{formErrors.phone}</div>}
            </div>
            <div>
                <input
                    type="text"
                    placeholder="email"
                    value={formContent.email}
                    onChange={(e) => {
                        userTypedSomeInfo((e.target as HTMLInputElement).value, "email");
                    }}
                />
                {formErrors.email && <div className="error">{formErrors.email}</div>}
            </div>
            <div>
                <input
                    type="text"
                    placeholder="birth date"
                    value={formContent.birthdate}
                    onChange={(e) => {
                        userTypedSomeInfo((e.target as HTMLInputElement).value, "birthdate");
                    }}
                />
                {formErrors.birthdate && <div className="error">{formErrors.birthdate}</div>}
            </div>
            <button onClick={userClickedSubmit}>Submit</button>

            {/* Show success message only if the form is valid */}
            <div id="result">
                {isSubmitted && <p>User submitted</p>}
            </div>
        </div>
    );
};
