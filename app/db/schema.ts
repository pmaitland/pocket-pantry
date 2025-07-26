import { sqliteTable, text, int } from "drizzle-orm/sqlite-core"

export const items = sqliteTable('item', {
  id: int().primaryKey({ autoIncrement: true }),
  name: text('name').notNull(),
  barcode: text('barcode'),
})