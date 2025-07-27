import { drizzle } from 'drizzle-orm/libsql'
import { itemsTable } from '../db/schema'

const useDatabase = () => {
  const db = drizzle(process.env.DB_FILE_NAME!)

  return {
    db,
    itemsTable
  }
}

export default useDatabase
