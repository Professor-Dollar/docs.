import Back from "@/components/Back/Back";
import Front from "@/components/Front/Front";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
    <Back/>
    <Front/>
    </main>
  );
}
