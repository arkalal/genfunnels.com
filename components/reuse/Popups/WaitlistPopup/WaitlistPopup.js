import React, { useState } from "react";
import styles from "./WaitlistPopup.module.scss";
import { IoCloseOutline } from "react-icons/io5";
import * as dispatcher from "../../../../redux/store/dispatchers";
import { connect } from "react-redux";
import axios from "../../../../axios/api";

const WaitlistPopup = ({
  dispatchWaitlistPopup,
  dispatchCommunityPopup,
  dispatchWaitlistEmail,
}) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });
  const [errors, setErrors] = useState({});
  const [Disable, setDisable] = useState(false);

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    const newErrors = { ...errors };
    if (value.trim() === "") {
      newErrors[name] = `${
        name.charAt(0).toUpperCase() + name.slice(1)
      } is required`;
    } else {
      delete newErrors[name];
      if (name === "email" && !validateEmail(value)) {
        newErrors.email = "Email is not valid";
      }
    }
    setErrors(newErrors);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {};
    if (!formData.firstName) newErrors.firstName = "First Name is required";
    if (!formData.lastName) newErrors.lastName = "Last Name is required";
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Email is not valid";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      setErrors({});
      setDisable(true);

      const data = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        isCommunity: false,
      };

      dispatchWaitlistEmail(formData.email);

      const res = await axios.post("/waitlist", data);

      if (res.status === 200) {
        console.log("Data saved successfully");
        dispatchWaitlistPopup(false);
        dispatchCommunityPopup(true);
      }
    }
  };

  return (
    <div className={styles.WaitlistPopup}>
      <div className={styles.WaitlistPopupContent}>
        <IoCloseOutline
          onClick={() => dispatchWaitlistPopup(false)}
          className={styles.WaitlistPopupClose}
        />

        <form onSubmit={handleSubmit}>
          <div className={styles.WaitlistPopupInputs}>
            <input
              placeholder="First Name"
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
            />
            {errors.firstName && (
              <p className={styles.error}>{errors.firstName}</p>
            )}
          </div>

          <div className={styles.WaitlistPopupInputs}>
            <input
              placeholder="Last Name"
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
            />
            {errors.lastName && (
              <p className={styles.error}>{errors.lastName}</p>
            )}
          </div>

          <div className={styles.WaitlistPopupInputs}>
            <input
              placeholder="Email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <p className={styles.error}>{errors.email}</p>}
          </div>

          <button disabled={Disable} type="submit">
            Submit and Join
          </button>
        </form>
      </div>
    </div>
  );
};

export default connect(null, dispatcher)(WaitlistPopup);
