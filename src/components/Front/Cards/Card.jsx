"use client";
import {
  FaRegCheckCircle,
  FaRegClock,
  FaRegFileAlt,
  FaTimes,
} from "react-icons/fa";
import styles from "./Card.module.css";
import tasks from "./data";
import { FaClockRotateLeft } from "react-icons/fa6";
import { motion } from "framer-motion";
function Card({ reference }) {
  return (
    <>
      {tasks.map((task, index) => {
        return (
          <motion.div
            drag
            dragConstraints={reference}
            whileDrag={{ scale: 1.1 }}
            dragElastic={0.5}
            className={styles.card}
            key={index}
          >
            <div className={styles.Content}>
              <FaRegFileAlt className={styles.fileIcon} />
              <h4 className={styles.Title}>{task.title.length > 19
                  ? `${task.title.substring(0, 18)}...`
                  : task.title}</h4>
              <p className={styles.Description}>
                {task.description.length > 84
                  ? `${task.description.substring(0, 84)}...`
                  : task.description}
              </p>
              <div className={styles.otherInfo}>
                <FaClockRotateLeft />
                <p>{task.deadline}</p>
              </div>
            </div>
            <div
              style={{
                background:
                  task.status === "failed"
                    ? "rgb(185, 28, 28)"
                    : task.status === "completed"
                    ? "rgb(22, 163, 74)"
                    : "rgb(37, 99, 245)",
              }}
              className={styles.isCompleted}
            >
              {task.status === "completed" ? (
                <FaRegCheckCircle />
              ) : task.status === "failed" ? (
                <FaTimes />
              ) : (
                <FaRegClock />
              )}
              <p>{task.status}</p>
            </div>
          </motion.div>
        );
      })}
    </>
  );
}

export default Card;
