"use client"

import { useFormState } from "react-dom"
import styles from "./registerForm.module.css"
import Link from "next/link"
import {register} from "@/lib/actions"
import {useRouter} from "next/navigation"
import {useEffect} from "react";

const RegisterForm = () => {
  const [state, formAction] = useFormState(register, undefined)

  const router = useRouter()

  useEffect(() => {
    state?.success && router.push("/login")
  }, [state?.success, router])

  return (
    <form className={styles.form} action={formAction}>
      <input type="text" placeholder="username" name="username"/>
      <input type="email" placeholder="email" name="email"/>
      <input type="password" placeholder="password" name="password"/>
      <input
        type="password"
        placeholder="password again"
        name="passwordRepeat"
      />
      <button>Register</button>
      {state?.error && <p className={styles.error}>{state?.error}</p>}
      <Link href="/login">
        Have an account? <b>Login</b>
      </Link>
    </form>
  );
};

export default RegisterForm