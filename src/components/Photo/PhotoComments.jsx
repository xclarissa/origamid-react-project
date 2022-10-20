import React from 'react'
import { useContext } from 'react'
import { UserContext } from '../../contexts/UserContext'
import PhotoCommentsForm from './PhotoCommentsForm'
import styles from './PhotoComments.module.css'

function PhotoComments(props) {
  const [comments, setComments] = React.useState(() => props.comments)
  const { login } = useContext(UserContext)
  const commentsSection = React.useRef(null)

  React.useEffect(() => {
    commentsSection.current.scrollTop = commentsSection.current.scrollHeight;
  }, [comments])

  return (
    <>
      <ul ref={commentsSection} className={`${styles.comments} ${props.single ? styles.single: ''}`}>
        {comments.map( comment => (
          <li key={comment.comment_ID}> 
            <b>{comment.comment_author}: </b>
            <span>{comment.comment_content}</span>
          </li>
        ))}
      </ul>
      {login && <PhotoCommentsForm single={props.single} id={props.id} setComments={setComments} />}
    </>
  )
}

export default PhotoComments