import { Trash, ThumbsUp } from 'phosphor-react';
import { useState } from 'react';
import Avatar from './Avatar';
import styles from './Comment.module.css'

    interface CommentProps {
        content: string;
        deleteComment: (comment: string) => void;
    }

function Comment ({ content, deleteComment }: CommentProps) {
    const [likeCount, setLikeCount] = useState(0);

    function handleDeleteComment () {
        deleteComment(content)
    }
    function handleLikeComment () {
        setLikeCount(likeCount + 1)
    }

    return (
        <div className={ styles.comment }>
            <Avatar hasBorder={ false } src="https://dc559.4shared.com/img/OhrfOfUEiq/s23/18183122770/photo-feed" />

            <div className={ styles.commentBox }>
                <div className={ styles.commentContent }>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Dâmaris Oliveira</strong>
                            <time title='27 de Junho de 2022' dateTime='2022-06-27 20:44:16'>Cerca de 2h atrás</time>
                        </div>

                        <button 
                            onClick={ handleDeleteComment } 
                            title='Deletar comentário'
                        >
                            <Trash size={24} />
                        </button>
                    </header>
                <p>{ content }</p>

                </div>
                <footer>
                    <button onClick={ handleLikeComment }>
                        <ThumbsUp />
                        Aplaudir 
                        <span>{ likeCount }</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}

export default Comment;