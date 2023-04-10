import { Avatar } from './Avatar'
import { ThumbsUp, Trash } from '@phosphor-icons/react'
import styles from './Comment.module.css'

export function Comment(props) {
    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/maykbrito.png" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}> 
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Mayk Brito</strong>
                            <time title='10 de Abril às 14:46' dateTime='2023-04-10 14:46:00'>Publicado há 1h</time>
                        </div>

                        <button title='Deletar comentário'>
                            <Trash size={24} />
                        </button>
                    </header>

                    <p>Texto do comentário</p>
                </div>

                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir  <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}