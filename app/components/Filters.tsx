type FiltersProps = {
  selectedCategories: string[];
  setSelectedCategories: (categories: string[]) => void;
  priceLimit: number;
  setPriceLimit: (price: number) => void;
};

export default function Filters({
  selectedCategories,
  setSelectedCategories,
  priceLimit,
  setPriceLimit,
}: FiltersProps) {
  const categories = ['electronics', 'jewelery', "men's clothing", "women's clothing"];

  const handleCategoryChange = (category: string) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter((c) => c !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  return (
    <div className="border p-4 rounded-md shadow-sm">
      <h2 className="text-lg font-semibold mb-2">Filters</h2>

      <div className="mb-4">
        <p className="font-medium mb-1">Category</p>
        {categories.map((cat) => (
          <label key={cat} className="block">
            <input
              type="checkbox"
              checked={selectedCategories.includes(cat)}
              onChange={() => handleCategoryChange(cat)}
              className="mr-2"
            />
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </label>
        ))}
      </div>

      <div>
        <p className="font-medium mb-1">
          Price Range: <span className="text-blue-600">${priceLimit}</span>
        </p>
        <input
          type="range"
          min="10"
          max="1000"
          value={priceLimit}
          onChange={(e) => setPriceLimit(Number(e.target.value))}
          className="w-full"
        />
      </div>
    </div>
  );
}
