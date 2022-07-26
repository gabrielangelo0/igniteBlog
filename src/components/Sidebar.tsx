import { PencilLine } from 'phosphor-react'
import Avatar from './Avatar'
import styles from './Sidebar.module.css'

function Sidebar () {
    return (
        <aside className={ styles.sidebar }>
            <img className={ styles.cover } src="https://images.unsplash.com/photo-1525498128493-380d1990a112?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80" />
            <div className={ styles.profile }>
            <Avatar src="https://github.com/gabrielangelo0.png" />
                <strong>Gabriel Angelo</strong>
                <span>Web Developer</span>

                <footer>
                    
                    <a href="#">
                        <PencilLine size={20} />
                        Editar seu perfil
                    </a>
                </footer>
            </div>
        </aside>
    )
}

export default Sidebar;