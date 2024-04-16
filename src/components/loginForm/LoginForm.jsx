"use client"

import { useFormState } from "react-dom"
import {useRouter} from "next/navigation"
import styles from "./loginForm.module.css"
import Link from "next/link"
import {login} from "@/lib/actions"
import {useEffect} from "react";

const LoginForm = () => {
  const [state, formAction] = useFormState(login, undefined)

  const router = useRouter()

  useEffect(() => {
    state?.success && router.push("/")
  }, [state?.success, router])

  return (
    <form className={styles.form} action={formAction}>
      <input type="text" placeholder="username" name="username"/>
      <input type="password" placeholder="password" name="password"/>
      <button>Login</button>
      {state?.error && <p className={styles.error}>{state?.error}</p>}
      <Link href="/register">
        {"Don't have an account?"} <b>Register</b>
      </Link>
    </form>
  );
};

export default LoginForm;