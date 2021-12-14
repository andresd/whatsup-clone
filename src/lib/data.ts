import { time } from 'console'
import { Chat, Message, User } from './types'

const users: User[] = [
  {
    id: 1,
    name: 'User 1',
    avatarUri: 'https://i.pravatar.cc/300?img=8'
  },
  {
    id: 2,
    name: 'User 2',
    avatarUri: 'https://i.pravatar.cc/300?img=6'
  },
  {
    id: 3,
    name: 'User 3',
    avatarUri: 'https://i.pravatar.cc/300?img=3'
  },
  {
    id: 4,
    name: 'User 4',
    avatarUri: 'https://i.pravatar.cc/300?img=7'
  }
]

const chats: Chat[] = [
  {
    id: 1,
    userIds: [4, 3],
    messageIds: [1, 2]
  },
  {
    id: 2,
    userIds: [1, 3],
    messageIds: [3, 4]
  },
  {
    id: 3,
    userIds: [2, 3],
    messageIds: [5, 6]
  }
]

const messages: Message[] = [
  {
    id: '1',
    text: 'Hello',
    chatId: 1,
    userId: 4,
    timestamp: 1639381398707
  },
  {
    id: '2',
    text: 'Hi',
    chatId: 1,
    userId: 3,
    timestamp: 1639381987416
  },
  {
    id: '3',
    text: 'How are you?',
    chatId: 2,
    userId: 1,
    timestamp: 1639382005110
  },
  {
    id: '4',
    text: 'I am fine',
    chatId: 2,
    userId: 3,
    timestamp: 1639390060266
  },
  {
    id: '5',
    text: 'What are you doing?',
    chatId: 3,
    userId: 2,
    timestamp: 1639382016323
  },
  {
    id: '6',
    text: 'I am coding',
    chatId: 3,
    userId: 3,
    timestamp: 1639382031870
  },
  {
    id: '7',
    chatId: 2,
    userId: 3,
    timestamp: 1639412505562,
    text: 'and you?'
  },
  {
    id: '8',
    chatId: 2,
    userId: 3,
    timestamp: 1639412539955,
    text: '???'
  },
  {
    id: '9',
    chatId: 2,
    userId: 1,
    timestamp: 1639412597591,
    text: 'good'
  },
]

export const getUser = (id: number): User | null => {
  return users.find(user => user.id === id) ?? null
}

export const getChatsOfUser = (userId: number): Chat[] => {
  return chats
    .filter(chat => chat.userIds.includes(userId))
    .map(chat => ({
      ...chat,
      users: chat.userIds.map(id => users.find(user => user.id === id)),
      latestMessage: messages.find(message => message.chatId === chat.id && message.timestamp <= messages.reduce((a, b) => a.timestamp > b.timestamp ? a : b).timestamp)
    }))
}

export const getMessagesOfChat = (chatId: number, fromTimestamp?: number, length = 10): Message[] => {
  let subset: Message[] = messages
    .filter(message => message.chatId === chatId)
    .map(message => ({
      ...message,
      user: users.find(user => user.id === message.userId)
    }))
    .sort((a, b) => b.timestamp - a.timestamp)

  if (fromTimestamp) {
    subset = subset.filter(message => message.timestamp < fromTimestamp)
  }

  return subset.slice(0, length)
}

export const addMessage = (chatId: number, userId: number, text: string) => {
  const message: Message = {
    id: `${chatId}-${userId}-${Date.now()}`,
    text,
    chatId,
    userId,
    timestamp: Date.now()
  }
  messages.push(message)
  return message
}