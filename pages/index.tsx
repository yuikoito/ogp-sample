import { useState } from "react";
import styles from "../styles/Home.module.css";
import Link from "next/link";
const Home = () => {
  const [text, setText] = useState<string>();
  const inputHandler = (e: { target: { value: string } }) => {
    setText(e.target.value);
  };
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <input type="text" onChange={inputHandler} />
        {text?.trim() && (
          <Link href={`/${text}`}>
            <a>OGPを作成する</a>
          </Link>
        )}
      </main>
    </div>
  );
};
export default Home;
