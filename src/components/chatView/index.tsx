import React, { HTMLAttributes, UIEvent, useEffect, useMemo, useRef, useState } from 'react'
import { cx } from '@emotion/css'
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import { currentUserState, latestMessagesState, messagesState, selectedChatState } from '../../lib/atoms'
import { addMessage, getMessagesOfChat } from '../../lib/data'
import { Avatar } from '../avatar'
import { MessageBubble } from './messageBubble'
import { chatViewStyles as styles } from './styles'
import { usePrevious } from 'react-use'
import { humanizeTimestamp } from '../../lib/utils'
import { TimeStampLabel } from '../timestampLabel'

type ChatViewProps = HTMLAttributes<HTMLDivElement>

export const ChatView = (props: ChatViewProps) => {
  const { className } = props

  const lastBubbleRef = useRef<HTMLDivElement>(null)
  const [justAddedMessage, setJustAddedMessage] = useState(false)
  const [inputMessage, setInputMessage] = useState<string>('')

  const selectedChat = useRecoilValue(selectedChatState)
  const [messages, setMessages] = useRecoilState(messagesState)
  const currentUser = useRecoilValue(currentUserState)
  const setLatestMessages = useSetRecoilState(latestMessagesState(selectedChat?.id))

  const reversedMessages = useMemo(() => messages.slice().reverse(), [messages])

  const prevMessagesCount = usePrevious(reversedMessages.length)

  useEffect(() => {
    if (selectedChat) {
      const result = getMessagesOfChat(selectedChat.id)
      setMessages(result)
    } else {
      setMessages([])
    }
  }, [selectedChat])

  useEffect(() => {
    if (justAddedMessage && prevMessagesCount && prevMessagesCount < reversedMessages.length) {
      lastBubbleRef.current?.scrollIntoView(false)
      setJustAddedMessage(false)
    }
  }, [reversedMessages, justAddedMessage, prevMessagesCount, selectedChat])

  const theOtherUser = selectedChat?.users?.find(user => user?.id !== currentUser?.id)

  const debounce = (func: (args: any[]) => void, wait: number) => {
    let timeout: NodeJS.Timeout
    return (...arg: any[]) => {
      clearTimeout(timeout)
      timeout = setTimeout(() => func(arg), wait)
    }
  }

  const handleScrollChange = debounce((isTop) => {
    if (isTop && selectedChat) {
      const currentLastMessage = messages[messages.length - 1]
      const result = getMessagesOfChat(selectedChat?.id, currentLastMessage.timestamp, 10)
      setMessages((messages) => [...messages, ...result])
    }
  }, 500)

  const onScrollChange = (event: UIEvent<HTMLDivElement>) => {
    const isTop = event.currentTarget.scrollTop === 0
    handleScrollChange(isTop)
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      if (!selectedChat || !currentUser) {
        return
      }
      event.preventDefault()
      const newMessage = addMessage(selectedChat.id, currentUser.id, event.currentTarget.value)
      setLatestMessages(newMessage)
      setMessages(messages => [newMessage, ...messages])
      setInputMessage('')
      setJustAddedMessage(true)
    }
  }

  return (
    <div className={cx(className, styles.container)}>
      {selectedChat && (
        <div className={styles.titleContainer}>
          <Avatar uri={theOtherUser?.avatarUri} name={theOtherUser?.name} size={54} />
          <div className={styles.title}>{theOtherUser?.name}</div>
        </div>
      )}
      {!selectedChat && <div className={styles.empty}>Wazzzuuuppp</div>}
      {selectedChat && (
        <>
          <div className={styles.messagesContainer} onScroll={onScrollChange}>
            {reversedMessages.map((message, index) => {
              const leftSide = message.userId === currentUser?.id
              const isLast = index === reversedMessages.length - 1
              const prevTimestamp = index > 0 ? humanizeTimestamp(reversedMessages[index - 1].timestamp, true) : ''
              const timestamp = humanizeTimestamp(message.timestamp, true)
              return (
                <>
                  {prevTimestamp !== timestamp && (
                    <div className={styles.timestampRow}>
                      <span className={styles.timestamp}>
                        <TimeStampLabel timestamp={message.timestamp} daily/>
                      </span>
                    </div>
                  )}
                  <div key={index} className={leftSide ? styles.leftBubble : styles.rightBubble}>
                    {!isLast && <MessageBubble message={message} user={message.user} leftSide={leftSide} />}
                    {isLast && <MessageBubble ref={lastBubbleRef} message={message} user={message.user} leftSide={leftSide} />}
                  </div>
                </>
              )
            })}
          </div>
          <div className={styles.inputContainer}>
            <input
              value={inputMessage}
              onChange={event => setInputMessage(event.currentTarget.value)}
              className={styles.inputBox}
              type='text'
              placeholder='Type a message'
              onKeyDown={handleKeyDown}
            />
          </div>
        </>
      )}
    </div>
  )
}
