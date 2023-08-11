import styles from "./BlogMenu.module.css";

export function BlogMenu() {
    return(
        <nav>
            <ul className={styles.menu}>
                <li><a href="#">Section 1</a></li>
                <li><a href="#">Section 2</a></li>
                <li><a href="#">Section 3</a></li>
                <li><a href="#">Section 4</a></li>
                <li><a href="#">Section 5</a></li>
                <li><a href="#">Section 6</a></li>
                <li><a href="#">Section 7</a></li>

            </ul>
        </nav>
    )
}