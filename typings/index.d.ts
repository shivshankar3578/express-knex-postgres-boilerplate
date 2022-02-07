import { knex } from "knex"

declare module "knex/types/tables" {
  interface User {
    id: number
    name: string
  }
  interface Tables {
    users: User
  }
}
