export default function Category ({params}: {params: {name: string}}) {
  return (
    <div>
      <h1>Category: {params.name}</h1>
    </div>
  )
}
