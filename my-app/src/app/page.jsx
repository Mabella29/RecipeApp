import Recipe from "@/app/components/Recipe";

export default function Home() {
  const foodData = [
    { id: 1, label: "Recipes & Menus >", color: "bg-orange-500" },
    { id: 2, label: "Share your recipe >", color: "bg-emerald-400" },
    { id: 3, label: "Custom meal plan >", color: "bg-orange-400" },
    { id: 4, label: "Create grocery list >", color: "bg-orange-500" },
    { id: 5, label: "Cooking Tips & Tricks >", color: "bg-green-600" },
  ];

  return (
    <div className="space-y-14">
      
      <div
        className="relative bg-cover bg-center rounded-3xl h-96 flex items-center text-white"
        style={{ backgroundImage: "url('/Images/Rectangle 20.svg')" }} 
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 rounded-3xl"></div>
        <div className="relative text-center px-6">
          <span className="inline-block mb-4 text-orange-500 text-xl font-semibold bg-black bg-opacity-30 px-4 py-2 rounded-md">
            Trending now
          </span>
          <h1 className="text-4xl md:text-5xl font-bold leading-snug">
            Mimmy's Famous Salad <br className="hidden sm:block" /> with Cheese
          </h1>
          <p className="mt-4 text-lg text-gray-300">By John Mike</p>
        </div>
      </div>

      
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 px-4 text-white font-semibold text-xl">
        {foodData.map((item) => (
          <div
            key={item.id}
            className={`flex items-center justify-center h-24 rounded-lg text-center font-semibold shadow-md hover:opacity-90 transition ${item.color}`}
          >
            {item.label}
          </div>
        ))}
      </div>

      <Recipe />
    </div>
  );
}
