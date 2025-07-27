import { drizzle } from 'drizzle-orm/libsql'
import { items } from '../db/schema'

const useDatabase = () => {
  const db = drizzle(process.env.DB_FILE_NAME!)

  return {
    db,
    items
  }
}

export default useDatabase
