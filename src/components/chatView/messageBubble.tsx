/* eslint-disable react/display-name */
import React, { forwardRef, useMemo } from 'react'
import { Message, User } from '../../lib/types'
import { humanizeTimestamp } from '../../lib/utils'
import { Avatar } from '../avatar'
import { messageBubbleStyles as styles } from './styles'

type MessageBubbleProps = {
  message: Message
  user?: User
  leftSide?: boolean
}

export const MessageBubble = forwardRef<HTMLDivElement, MessageBubbleProps>((props, ref) => {
  const { message, user, leftSide = false } = props

  const timestamp = useMemo<string>(() => humanizeTimestamp(message.timestamp), [message])

  return (
    <div ref={ref} className={styles.container}>
      {!leftSide && <Avatar uri={user?.avatarUri} name={user?.name} size={40} />}
      <div className={leftSide ? styles.leftBubble : styles.rightBubble}>
        <div className={styles.userName}>{user?.name}</div>
        <div className={styles.text}>{message.text}</div>
        <div className={styles.timestamp}>{timestamp}</div>
      </div>
    </div>

  )
})
