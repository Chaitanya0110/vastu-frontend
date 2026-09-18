import { Button, FormControl, InputLabel, MenuItem, Select, Tooltip } from "@mui/material";
import { useEffect, useState } from "react";
import { FiArrowDown, FiArrowUp, FiRefreshCw, FiSearch } from "react-icons/fi";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";

function Filter({categories}){

    const [searchParam ]= useSearchParams();
    const params = new URLSearchParams(searchParam);
    const pathname = useLocation().pathname;
    const navigate = useNavigate();

    const [category, setCategory] = useState("all");
    const [sortOrder, setSortOrder] = useState("asc");
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        const currentCategory = searchParam.get("category") || "all";
        const currentSortOrder = searchParam.get("sortby") || "asc";
        const currentSearchTerm = searchParam.get("keyword") || "";

        setCategory(currentCategory);
        setSortOrder(currentSortOrder);
        setSearchTerm(currentSearchTerm);
    }, [searchParam]);

    useEffect(() => {
        const handler = setTimeout(() => {
            if(searchTerm){
                searchParam.set("keyword", searchTerm);
            } else {
                searchParam.delete("keyword");
            }
            navigate(`${pathname}?${searchParam.toString()}`);
        }, 700);

        return () => {clearTimeout(handler)};
    }, [searchParam, searchTerm, navigate, pathname]);

    const handleCategoryChange = (event) => {
        const selectedCategory = event.target.value;
        if(selectedCategory === "all"){
            params.delete("category");
        } else {
            params.set("category", selectedCategory);
        }
        navigate(`${pathname}?${params}`);   
        setCategory(event.target.value);
    };

    const toggleSortOrder = () => {
        const newSortOrder = sortOrder === "asc" ? "desc" : "asc";
        setSortOrder(newSortOrder);
        params.set("sortby", newSortOrder);
        navigate(`${pathname}?${params.toString()}`);   
    };

    const handleClearFilter = () => {
        navigate({pathname: window.location.pathname});
    };

   return (
    <div className="flex lg:flex-row flex-col-reverse lg:justify-between justify-center items-center gap-4 w-full">
    
        {/* --- LEFT SIDE: Search Bar --- */}
        <div className="relative flex items-center 2xl:w-[450px] sm:w-[420px] w-full">
            <input 
                type="text" 
                placeholder="Search products..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="border border-gray-400 text-slate-800 rounded-md py-2 pl-10 pr-4 w-full focus:outline-hidden focus:ring-2 focus:ring-[#1976d2]" 
            />
            <FiSearch className="absolute left-3 text-slate-800" size={20} />
        </div>

        {/* --- RIGHT SIDE: Filters & Actions --- */}
        <div className="flex sm:flex-row flex-col items-center gap-4 w-full sm:w-auto">
            
            {/* Category Selection */}
            <FormControl variant="outlined" className="w-full sm:w-auto text-slate-800 border-slate-700" size="small">
                <InputLabel id="category-select-label">Category</InputLabel>
                <Select 
                    labelId="category-select-label" 
                    value={categories} 
                    onChange={handleCategoryChange} 
                    label="Category"
                    className="min-w-[120px] text-slate-800 border-slate-700"
                >
                    <MenuItem value="all"> All </MenuItem>
                    {categories.map((item) => (
                        <MenuItem key={item.categoryId} value={item.categoryName}>
                            {item.categoryName}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>

            {/* Sort Button */}
            <Tooltip title="Sort by price: asc">
                <Button variant="contained" color="primary" className="text-slate-800 flex items-center gap-2 h-10 w-full sm:w-auto" onClick={toggleSortOrder}>
                    Sort By
                    {sortOrder === "asc" ? <FiArrowUp size={20} /> : <FiArrowDown size={20} />}
                </Button>
            </Tooltip>

            {/* Clear Filter */}
            <button className="flex items-center justify-center gap-2 bg-red-900 text-white py-2 px-4 rounded transition duration-300 hover:bg-red-700 ease-in shadow-md focus:outline-none w-full sm:w-auto h-10" onClick={handleClearFilter}>
                <FiRefreshCw className="font-semibold" size={16} />
                <span className="font-semibold">Clear Filter</span>
            </button>
            
        </div>
    </div>
    );
}

export default Filter;