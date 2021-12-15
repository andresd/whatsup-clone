import React, { HTMLAttributes, useEffect } from 'react'
import { cx } from '@emotion/css'
import { Chat, User } from '../../lib/types'
import { Avatar } from '../avatar'
import { useMedia } from 'react-use'
import { chatItemStyles as styles } from './styles'
import { TimeStampLabel } from '../timestampLabel'
import { useRecoilState } from 'recoil'
import { latestMessagesState } from '../../lib/atoms'
import { getChatLastMessage } from '../../lib/data'

type ChatItemProps = {
  chatId: number
  user?: User
  isSelected?: boolean
  onClick?: () => void
} & HTMLAttributes<HTMLDivElement>

export const ChatItem = (props: ChatItemProps) => {
  const { user, chatId, onClick, isSelected = false } = props

  const isWide = useMedia('(min-width: 640px)')
  const [latestMessage, setLatestMessage] = useRecoilState((latestMessagesState(chatId)))

  useEffect(() => {
    if (latestMessage === null) {
      const message = getChatLastMessage(chatId)
      setLatestMessage(message)
    }
  }, [])

  console.log(latestMessage)

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
        <div className={styles.timestamp}><TimeStampLabel timestamp={latestMessage?.timestamp}/></div>
      </div>

    </div>
  )
}