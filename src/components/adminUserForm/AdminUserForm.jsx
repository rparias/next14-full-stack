"use client";

import { addUser } from "@/lib/actions";
import styles from "./adminUserForm.module.css";
import { useFormState } from "react-dom";
import { useEffect, useRef } from "react";

const AdminUserForm = () => {
  const [state, formAction] = useFormState(addUser, undefined);
  const ref = useRef(null)

  useEffect(() => {
    if (state?.success) {
      ref.current.reset();
    }
  }, [state?.success, ref]);

  return (
    <form ref={ref} action={formAction} className={styles.container}>
      <h1>Add New User</h1>
      <input type="text" name="username" placeholder="username" />
      <input type="text" name="email" placeholder="email" />
      <input type="password" name="password" placeholder="password" />
      <input type="text" name="img" placeholder="img" />
      <select name="isAdmin">
        <option value="false">Is Admin?</option>
        <option value="false">No</option>
        <option value="true">Yes</option>
      </select>
      <button>Add</button>
      {state?.error && <p className={styles.error}>{state?.error}</p>}
    </form>
  );
};

export default AdminUserForm;