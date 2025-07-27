import useDatabase from '../hooks/useDatabase'

const useItems = () => {
  const { db, itemsTable } = useDatabase()

  const items = db.select().from(itemsTable).all()

  return {
    items
  }
}

export default useItems