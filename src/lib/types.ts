export interface User {
  id: number;
  name: string;
  avatarUri: string;
}

export interface Message {
  id: string
  text: string
  chatId: number
  userId: number
  timestamp: number
  user?: User
}

export interface Chat {
  id: number
  userIds: number[]
  messageIds: number[]

  users?: (User | undefined)[]
  latestMessage?: Message
}


