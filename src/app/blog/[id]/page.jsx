import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import { notFound } from "next/navigation";

// async function getData(id) {
//   const res = await fetch(`http://localhost:3000/api/posts/${id}`, {
//     cache: "no-store",
//   });

//   if (!res.ok) {
//     return notFound()
//   }

//   return res.json();
// }


// export async function generateMetadata({ params }) {

//   const post = await getData(params.id)
//   return {
//     title: post.title,
//     description: post.desc,
//   };
// }

const BlogPost =  () => {
 
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>title</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis obcaecati ducimus earum, dicta suscipit eum nobis, dolor reiciendis, illo accusamus non voluptates ea. 
            Expedita, iure quaerat facere vero maiores harum.
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis obcaecati ducimus earum, dicta suscipit eum nobis, dolor reiciendis, illo accusamus non voluptates ea. 
            Expedita, iure quaerat facere vero maiores harum.
          </p>
          <div className={styles.author}>
            <Image
              src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt=""
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>username</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
            fill={true}
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>
         Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia, sequi nam animi ipsa expedita nobis totam modi dolores reprehenderit, accusamus numquam aliquam vel nisi? 
         Sed vero pariatur molestiae itaque libero!
         Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia, sequi nam animi ipsa expedita nobis totam modi dolores reprehenderit, accusamus numquam aliquam vel nisi? 
         Sed vero pariatur molestiae itaque libero!
        </p>
      </div>
    </div>
  );
};

export default BlogPost;