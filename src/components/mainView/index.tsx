import React, { useEffect } from 'react'
import { css } from '@emotion/css'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { ChatList } from '../chatList'
import { ChatView } from '../chatView'
import { getChatsOfUser } from '../../lib/data'
import { baseChatsState, currentUserState } from '../../lib/atoms'

const styles = {
  container: css({
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    height: '100%',
    backgroundColor: '#090E12',
    overflow: 'hidden',
    margin: 'auto',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  }),
  chatList: css({
    width: '480px',
    height: '100vh'
  }),
  chatView: css({
    width: '100%',
    flex: 1
  })
}

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