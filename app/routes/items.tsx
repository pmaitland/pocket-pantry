import { useLoaderData } from '@remix-run/react'
import type { LoaderFunctionArgs } from '@remix-run/node'
import useDatabase from '../hooks/useDatabase'

export async function loader({
  request,
}: LoaderFunctionArgs) {
  const { db, items } = useDatabase()
  return db.select().from(items).all()
}

function Items() {
  const items = useLoaderData<typeof loader>()
  
  return (
    <div>
      <h1>Items</h1>
      <table>
        <tr>
          <th>Name</th>
          <th>Barcode</th>
        </tr>
        {items.map(item => (
          <tr key={item.id}>
            <td>{item.name}</td>
            <td>{item.barcode}</td>
          </tr>
        ))}
      </table>
    </div>
  )
}

export default Items
