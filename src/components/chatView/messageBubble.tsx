/* eslint-disable react/display-name */
import React, { forwardRef } from 'react'
import { Message, User } from '../../lib/types'
import { Avatar } from '../avatar'
import { TimeStampLabel } from '../timestampLabel'
import { messageBubbleStyles as styles } from './styles'

type MessageBubbleProps = {
  message: Message
  user?: User
  leftSide?: boolean
}

export const MessageBubble = forwardRef<HTMLDivElement, MessageBubbleProps>((props, ref) => {
  const { message, user, leftSide = false } = props

  return (
    <div ref={ref} className={styles.container}>
      {!leftSide && <Avatar uri={user?.avatarUri} name={user?.name} size={40} />}
      <div className={leftSide ? styles.leftBubble : styles.rightBubble}>
        <div className={styles.userName}>{user?.name}</div>
        <div className={styles.text}>{message.text}</div>
        <div className={styles.timestamp}><TimeStampLabel timestamp={message.timestamp}/></div>
      </div>
    </div>

  )
})
