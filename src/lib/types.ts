export interface InitState {
  errorMssage: null | string
  status: string
  authToken: string
  date: Date
}

export interface AllConversations {
  id: number
  user_id: number
  label: string
  created_at: Date
}
