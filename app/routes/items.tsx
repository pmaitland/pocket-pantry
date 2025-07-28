import { useLoaderData } from '@remix-run/react'
import type { LoaderFunctionArgs } from '@remix-run/node'
import useItems from '../hooks/useItems'

export async function loader({
  request,
}: LoaderFunctionArgs) {
  const { items } = useItems()
  return items
}

function Items() {
  const items = useLoaderData<typeof loader>()
  
  return (
    <div>
      <h1>Items</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Barcode</th>
          </tr>
        </thead>
        <tbody>
          {items.map(item => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.barcode}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Items
