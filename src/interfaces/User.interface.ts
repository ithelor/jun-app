export default interface IUser {
  userDto: {
    login: string
    email: string
    name: string
    lastName: string
    patronymic: string
    roles: string[]
  }
  token: string
}
