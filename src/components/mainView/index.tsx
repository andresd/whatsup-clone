import React, { useEffect } from 'react'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { ChatList } from '../chatList'
import { ChatView } from '../chatView'
import { getChatsOfUser } from '../../lib/data'
import { baseChatsState, currentUserState } from '../../lib/atoms'
import { styles } from './styles'

export const MainView = () => {
  const currentUser = useRecoilValue(currentUserState)
  const setChats = useSetRecoilState(baseChatsState)

  useEffect(() => {
    if (currentUser) {
      const result = getChatsOfUser(currentUser.id)
      setChats(result)
    } else {
      setChats([])
    }
  }, [currentUser])


  return (
    <div className={styles.container}>
      <ChatList className={styles.chatList} />
      <ChatView className={styles.chatView} />
    </div>
  )
}