import styles from "./Sidebar.module.css";

export function Sidebar(){
    return(
        <aside className={styles.sidebar}>
            <ul>
                <li><a href="#">Section 1</a></li>
                <li><a href="#">Section 2</a></li>
                <li><a href="#">Section 3</a></li>
                <li><a href="#">Section 4</a></li>
            </ul>
        </aside>
    )
}