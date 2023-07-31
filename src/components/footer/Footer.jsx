import Image from "next/image"
import styles from "./footer.module.css"

export default function Footer() {
  return (
    <div className={styles.container}>
        <div>@lamamia.All rights reserved</div>
        <div className={styles.social}>
            <Image src="/1.png" alt="facebook" className={styles.icon}  
                width={15} height={15}
            />
            <Image src="/2.png" alt="facebook"  className={styles.icon}
                width={15} height={15}
            />
            <Image src="/3.png" alt="facebook"  className={styles.icon}
                width={15} height={15}
            />
            <Image src="/4.png" alt="facebook"  className={styles.icon}
                width={15} height={15}
            />
        </div>
    </div>
  )
}
