export type Category = 'shoes' | 'clothes' | 'book'

export type Condition = 'new' | 'used'

export type User = {
  id: number
  username: string
  displayName: string
  email: string
  profileImageUrl: string
  condition: Condition
  owner: User
}

export type ApiContext = {
  apiRootUrl: string
}
