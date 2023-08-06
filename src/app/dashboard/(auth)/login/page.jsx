"use client" 
 
 import { signIn } from 'next-auth/react'
 
  import styles from "./page.module.css"
  import { useSession } from 'next-auth/react'
  import {useRouter} from "next/navigation"

const handleSubmit = async (e) => {
  e.preventDefault();
 
  const email = e.target[0].value;
  const password = e.target[1].value;

  signIn("credentials",{email,password});

 
}


export default function Login() {
  const session= useSession();
  const router=useRouter();

  if(session.status==="loading"){
    return <p>Loading...</p>
  }
  if(session.status==="authenticated"){
    router?.push("/dashboard");
  }
  return (
    <div className={styles.container}>
           <form onSubmit={handleSubmit} className={styles.form}>
    
    <input
      type="text"
      placeholder="Email"
      required
      className={styles.input}
    />
    <input
      type="password"
      placeholder="Password"
      required
      className={styles.input}
    />
    <button type="submit" className={styles.button}>Login</button>
   
  </form>
    <div>
      <button onClick={()=>{signIn("github")}}>Login with github</button>
    </div>
    </div>
   
  )
}
