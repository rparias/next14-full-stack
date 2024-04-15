import styles from "./login.module.css"
import {handleGithubLogin} from "@/lib/actions";

const LoginPage = async () => {

  return (
    <div className={styles.container}>
      <form action={handleGithubLogin}>
        <button>Login with GitHub</button>
      </form>
    </div>
  )
}

export default LoginPage