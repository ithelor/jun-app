export default interface IUser {
  usrDTO: {
    login: string
    email: string
    name: string
    lastName: string
    patronymic: string
    roles: string[]
  }
  token: string
}
