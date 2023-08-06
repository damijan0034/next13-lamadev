import Image from 'next/image'
import styles from './page.module.css'
import Button from '@/components/Button/Button'

export const metadata = {
    title: 'contact',
    description: 'This is contact page',
  }


export default function Contact() {
  return (
    <div className={styles.container}>
        <h1 className={styles.title}>Let's keep in touch</h1>
        <div className={styles.content}>
            <div className={styles.imgContainer}>
                <Image 
                    src="/contact.png"
                    alt="contact"
                    fill={true}
                    className={styles.image}
                />
            </div>
            <form className={styles.form}>
                <input type="text" placeholder='name' className={styles.input} />
                <input type="text" placeholder='email' className={styles.input} />
                <textarea placeholder='message' className={styles.textArea} 
                cols="30" rows="10"
                
                ></textarea>
                <Button url="#" text="Send" />
            </form>
        </div>
    </div>
  )
}
