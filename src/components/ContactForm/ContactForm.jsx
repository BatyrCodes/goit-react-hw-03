import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import styles from "./ContactForm.module.css";

const ContactForm = ({ onAddContact }) => {
  const formik = useFormik({
    initialValues: {
      name: "",
      number: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(3, "Мінімум 3 символи")
        .max(50, "Максимум 50 символів")
        .required("Це поле обов'язкове"),
      number: Yup.string()
        .matches(/^\d{3}-\d{2}-\d{2}$/, "Формат: XXX-XX-XX")
        .required("Це поле обов'язкове"),
    }),
    onSubmit: (values, { resetForm }) => {
      onAddContact(values.name, values.number);
      resetForm();
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className={styles.contactForm}>
      <div className={styles.formGroup}>
        <label htmlFor="name" className={styles.formLabel}>
          Name
        </label>
        <input
          id="name"
          type="text"
          {...formik.getFieldProps("name")}
          className={`${styles.formInput} ${
            formik.touched.name && formik.errors.name ? styles.inputError : ""
          }`}
        />
        {formik.touched.name && formik.errors.name ? (
          <div className={styles.errorText}>{formik.errors.name}</div>
        ) : null}
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="number" className={styles.formLabel}>
          Number
        </label>
        <input
          id="number"
          type="text"
          {...formik.getFieldProps("number")}
          className={`${styles.formInput} ${
            formik.touched.number && formik.errors.number
              ? styles.inputError
              : ""
          }`}
        />
        {formik.touched.number && formik.errors.number ? (
          <div className={styles.errorText}>{formik.errors.number}</div>
        ) : null}
      </div>
      <button type="submit" className={styles.submitButton}>
        Add Contact
      </button>
    </form>
  );
};

export default ContactForm;
