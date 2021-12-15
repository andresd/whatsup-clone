import React, { HTMLAttributes, useState } from 'react'
import { cx } from '@emotion/css'
import { useMedia } from 'react-use'
import { useRecoilState, useRecoilValue } from 'recoil'
import { chatsState, currentUserState, selectedChatState } from '../../lib/atoms'
import { Avatar } from '../avatar'
import { CloseIcon, LeftArrowIcon, SearchIcon } from '../iconComponent'
import { ChatItem } from './chatItem'
import { chatListStyles as styles } from './styles'

type ChatListProps = HTMLAttributes<HTMLDivElement>

export const ChatList = (props: ChatListProps) => {
  const { className } = props

  const [searchInFocus, setSearchInFocus] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')

  const [selectedChat, setSelectedChat] = useRecoilState(selectedChatState)
  const currentUser = useRecoilValue(currentUserState)
  const chats = useRecoilValue(chatsState(searchTerm))

  const isWide = useMedia('(min-width: 640px)')

  const clearSearch = () => {
    setSearchTerm('')
    setSearchInFocus(false)
  }

  if (isWide) {
    return (
      <div className={cx(className, styles.container)}>
        <div className={styles.header}>
          <Avatar uri={currentUser?.avatarUri} name={currentUser?.name} size={54} />
        </div>
        <div className={styles.searchBar}>
          {!searchInFocus && <SearchIcon className={styles.searchIcon} width={20} height={20} onClick={() => setSearchInFocus(!searchInFocus)} />}
          {searchInFocus && <LeftArrowIcon className={styles.searchIcon} width={20} height={20} onClick={clearSearch} />}
          <input
            className={styles.searchInput}
            type='text'
            placeholder='Search...'
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.currentTarget.value)}
            onFocus={() => setSearchInFocus(true)}
            onBlur={() => setSearchInFocus(searchTerm !== '')}
          />
          {searchInFocus && <CloseIcon className={styles.searchIcon} width={20} height={20} onClick={clearSearch} />}
        </div>
        <div className={styles.chats}>
          {chats.map((chat, index) => (
            <ChatItem
              key={index}
              chatId={chat.id}
              user={chat.users?.find(user => user?.id !== currentUser?.id)}
              isSelected={selectedChat?.id === chat.id}
              onClick={() => setSelectedChat(chat)}
            />
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className={cx(className, styles.container)}>
      <div className={styles.chats}>
        {chats.map((chat, index) => (
          <ChatItem
            key={index}
            chatId={chat.id}
            user={chat.users?.find(user => user?.id !== currentUser?.id)}
            isSelected={selectedChat?.id === chat.id}
            onClick={() => setSelectedChat(chat)}
          />
        ))}
      </div>
    </div>
  )

}
