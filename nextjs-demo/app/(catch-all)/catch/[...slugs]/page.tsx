export default async function Posts({
  params,
}: {
  params: { slugs: string[] }
}) {
  return (
    <main className="flex min-h-screen flex-col items-center   p-24">
      {JSON.stringify(params.slugs, null, 2)}
    </main>
  )
}
