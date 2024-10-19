"use client";
import { useRef } from "react";
import Card from "./Cards/Card"
import styles from "./Front.module.css";
function Front() {
  const ref = useRef(null);
  return (
    <div ref={ref} className={styles.container}>
        <div className={styles.cardsWrapper}>
            <Card reference={ref}/>
        </div>
    </div>
  )
}

export default Front