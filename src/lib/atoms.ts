import { atom, atomFamily, selectorFamily } from 'recoil'
import { getMessagesOfChat, getUser } from './data'
import { Chat, Message, User } from './types'

export const currentUserState = atom<User | null>({
  key: 'currentUserState',
  default: getUser(3)
})

export const baseChatsState = atom<Chat[]>({
  key: 'baseChatsState',
  default: [],
})

export const chatsState = selectorFamily<Chat[], string>({
  key: 'chatsState',
  get: (filter) => ({ get }) => {
    const chats = get(baseChatsState)
    return chats.filter(chat => !filter || chat.users?.some(user => user?.name.includes(filter)))
  }
})

export const selectedChatState = atom<Chat | null>({
  key: 'selectedChatState',
  default: null
})

export const messagesState = atom<Message[]>({
  key: 'messagesState',
  default: []
})