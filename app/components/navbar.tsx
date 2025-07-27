function Navbar() {
  const pages = [
    'items',
    'scanner'
  ]

  return (
    <div>
      <h1>pocket pantry</h1>
      <ul>
        {pages.map(page =>
          <li>
            <a href={`/${page}`}>{page}</a>
          </li>
        )}
      </ul>
    </div>
  )
}

export default Navbar
