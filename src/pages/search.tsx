import { useState } from "react";
import ProductCard from "../components/product-card";

const Search = () => {

  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");
  const [maxPrice, setMaxPrice] = useState(100000);
  const [category, setCategory] = useState("");
  const [page, setPage] = useState(1);

  function addToCardHandler(){}
  const isPrePage = page > 1
  const isNextPage = page < 4
  
  return (
    <div className="product-search-page">
      <aside>
        <h2>Filters</h2>
        <div>
        <h4>
          Sort
        </h4>
        <select value={sort} onChange={(e)=> setSort(e.target.value)}>
          <option value="">Default</option>
          <option value="asc">Price - Low to High</option>
          <option value="dsc">Price - High to Low</option>
        </select>
        
      </div>
        <div>
        <h4>
          Max Price: {maxPrice || ""}
        </h4>
        <input type="range" min={100} max={100000} value={maxPrice} onChange={(e)=> setMaxPrice(Number(e.target.value))}
          />
        
      </div>

      <div>
          <h4>Category</h4>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">All</option>
            <option value="">sample-1</option>
            <option value="">sample-2</option>
          </select>
        </div>
      </aside>

      <main>
        <h1>Products</h1>
        <input
          type="text"
          placeholder="Search by name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className="search-product-list">
        <ProductCard
          name="ipad"
          photo="https://images.unsplash.com/photo-1561154464-82e9adf32764?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          price={2390}
          productId="dfsadlk"
          stock={32}
          handler={addToCardHandler}
        />
        </div>

      <article>
        <button disabled={!isPrePage} onClick={()=> setPage(pre=>pre-1)}>Pre</button>
        <span>{page} of 4</span>
        <button disabled={!isNextPage} onClick={()=> setPage(pre=>pre+1)}>Next</button>

      </article>
      </main>
      
    </div>
  )
};

export default Search;
