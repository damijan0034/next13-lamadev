'use client'

import Link from "next/link";
import styles from "./navbar.module.css";
import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";
import { signOut } from "next-auth/react";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const links = [
    {
      id: 1,
      title: "Home",
      url: "/",
    },
    {
      id: 2,
      title: "Portfolio",
      url: "/portfolio",
    },
    {
      id: 3,
      title: "Blog",
      url: "/blog",
    },
    {
      id: 4,
      title: "About",
      url: "/about",
    },
    {
      id: 5,
      title: "Contact",
      url: "/contact",
    },
    {
      id: 6,
      title: "Dashboard",
      url: "/dashboard",
    },
  ];
  

export default function Navbar() {
  const session=useSession();
  const router =useRouter();

  const signUp=()=>router.push("/dashboard/register")
  return (
    <div className={styles.container}>
        
        <Link className={styles.logo} href={"/"}>
            lamamia
        </Link>
        
        <div className={styles.links}>
        <DarkModeToggle />
            {
                links.map(link=>(
                    <Link href={link.url} key={link.id} className={styles.link}>
                        {link.title}
                    </Link>
                ))
            }
            {session.status === "authenticated" &&
            <button className={styles.logout} onClick={signOut}>
                Logout
            </button>
            }
            {session.status === "unauthenticated" &&
            <button className={styles.logout} onClick={signUp}>
                Signup
            </button>
            }
        </div>
    </div>
  )
}
