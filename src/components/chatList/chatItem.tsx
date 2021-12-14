import React, { HTMLAttributes, useState } from 'react'
import { cx } from '@emotion/css'
import { Chat, User } from '../../lib/types'
import { Avatar } from '../avatar'
import { humanizeTimestamp } from '../../lib/utils'
import { useInterval, useMedia } from 'react-use'
import { chatItemStyles as styles } from './styles'

type ChatItemProps = {
  chat: Chat
  user?: User
  isSelected?: boolean
  onClick?: () => void
} & HTMLAttributes<HTMLDivElement>

export const ChatItem = (props: ChatItemProps) => {
  const { user, chat: { latestMessage }, onClick, isSelected = false } = props
  const [timestamp, setTimestamp] = useState(humanizeTimestamp(latestMessage?.timestamp))

  const isWide = useMedia('(min-width: 640px)')

  useInterval(() => {
    setTimestamp(humanizeTimestamp(latestMessage?.timestamp))
  }, 60000)

  return (
    <div className={cx(styles.container, isSelected ? styles.selectedContainer : '')} onClick={onClick}>
      <div className={styles.leftContainer}>
        <Avatar uri={user?.avatarUri} name={user?.name} size={64} />
      </div>
      {isWide && (
        <div className={styles.middleContainer}>
          <div className={styles.nameTitle}>{user?.name}</div>
          <div className={styles.lastMessage}>{latestMessage?.text}</div>
        </div>
      )}
      <div className={styles.rightContainer}>
        <div className={styles.timestamp}>{timestamp}</div>
      </div>

    </div>
  )
}