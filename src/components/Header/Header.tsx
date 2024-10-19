import styles from "./Header.module.css"
function Header() {
  return (
    <nav className={styles.nav}>
        <div className="navLeft">
            <div className={styles.ownthecode}>
                <p>own the </p><span>code</span>
            </div>
        </div>
        <div className={styles.navMiddle}>All Tasks</div>
        <div className={styles.navRight}>
            <a href="">Add</a>
            <a href="">Remove</a>
            <a href="">Edit</a>
            <a href="">Contact</a>
        </div>
    </nav>
  )
}

export default Header