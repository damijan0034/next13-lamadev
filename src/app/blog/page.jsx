import Image from "next/image"
import styles from "./page.module.css"
import Link from "next/link"

async function getData() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.
   
    // Recommendation: handle errors
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data')
    }
   
    return res.json()
  }

export default async function Blog() {
    const data=getData();
  return (
    <>
    {
        data.map(item=>(
            <Link href="/blog/testId"  className={styles.container}>
            <div className={styles.imgContainer}>
                <Image
                    className={styles.image}
                    src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt=""
                    width={400} height={250}
                />
            </div>
            <div className={styles.content}>
                <h1 className={styles.title}>Lorem ipsum dolor sit amet consectetur</h1>
                <p className={styles.desc}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure dicta deleniti eligendi harum voluptas ab sit corrupti commodi magni adipisci dolor vitae tenetur,
                     laborum ratione odit aperiam ipsa dolores! Corporis.
                </p>
            </div>
             </Link>
        ))
    }
        
        
    </>
   
    
  )
}
