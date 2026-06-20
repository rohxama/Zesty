export default function Menu() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Our Menu</h1>
      <p className="text-gray-600">Browse our delicious selection of food items.</p>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Food items will be rendered here */}
      </div>
    </div>
  )
}
