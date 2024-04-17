"use client"

import { addPost } from "@/lib/actions";
import styles from "./adminPostForm.module.css";
import { useFormState } from "react-dom";
import { useEffect, useRef } from "react";

const AdminPostForm = ({userId}) => {
  const [state, formAction] = useFormState(addPost, undefined);
  const ref = useRef(null);

  useEffect(() => {
    if (state?.success) {
      ref.current.reset();
    }
  }, [state?.success, ref]);

  return (
    <form ref={ref} action={formAction} className={styles.container}>
      <h1>Add New Post</h1>
      <input type="hidden" name="userId" value={userId} />
      <input type="text" name="title" placeholder="title" />
      <input type="text" name="slug" placeholder="slug" />
      <input type="text" name="img" placeholder="img" />
      <textarea name="body" placeholder="body" rows={10} />
      <button>Add</button>
      {state?.error && <p className={styles.error}>{state?.error}</p>}
    </form>
  );
};

export default AdminPostForm;