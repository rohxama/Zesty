export default function Home() {
  return (
    <div className="space-y-8">
      <section className="flex flex-col items-center justify-center py-20 text-center">
        <h1 className="text-5xl font-bold text-orange-500">Welcome to Zesty</h1>
        <p className="mt-4 text-xl text-gray-600">Delicious food, delivered to your door</p>
        <a
          href="/menu"
          className="mt-8 rounded-lg bg-orange-500 px-8 py-3 text-white transition-colors hover:bg-orange-600"
        >
          Explore Menu
        </a>
      </section>
    </div>
  )
}
