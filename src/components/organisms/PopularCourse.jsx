import { useState, useEffect } from "react";
import axios from "axios";
import CardClass from "../molecules/CardClass";


export default function PopularCourse() {
    const [categories, setCategories] = useState([]);
    const [classes, setClasses] = useState([]); 
    const [selectedCategory, setSelectedCategory] = useState("All");

    // Fetch data kategori
    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await axios.get("https://be-intern-ayodya.vercel.app/api/category");
                setCategories(response.data.datas);
            } catch (error) {
                console.error("Error fetching categories:", error);
            }
        };

        const fetchClasses = async () => {
            try {
                const response = await axios.get("https://be-intern-ayodya.vercel.app/api/class"); 
                setClasses(response.data.datas);
            } catch (error) {
                console.error("Error fetching classes:", error);
            }
        };

        fetchCategories();
        fetchClasses();
    }, []);

    return (
        <div className="bg-white w-full flex justify-center px-[240px]">
            <div className="flex flex-col w-full my-[26px]">
                <div className="flex justify-between items-center w-full mb-[16px]">
                    <h2 className="font-bold text-2xl">Kursus Populer</h2>
                    <button className="text-[#6148FF] font-bold">Lihat Semua</button>
                </div>

                
                <div className="flex flex-row gap-[12px] font-bold text-center">
                    <button 
                        className={`px-[21px] py-[5px] cursor-pointer rounded-[15px] ${selectedCategory === "All" ? "bg-[#6148FF] text-white" : "bg-[#E8F1FF] text-black"} hover:bg-[#6148FF] hover:text-white`} 
                        onClick={() => setSelectedCategory("All")}
                    >
                        All
                    </button>
                    {categories.map((category) => (
                        <button 
                            key={category.id} 
                            className={`px-[21px] py-[5px] cursor-pointer rounded-[15px] ${selectedCategory === category.id ? "bg-[#6148FF] text-white" : "bg-[#E8F1FF] text-black"} hover:bg-[#6148FF] hover:text-white`} 
                            onClick={() => setSelectedCategory(category.id)}
                        >
                            {category.name}
                        </button>
                    ))}
                </div>

                
                <div className="flex flex-row w-full my-[2px] overflow-x-scroll">
                    <div className="flex justify-center gap-[10px] py-[16px]">
                        {classes
                            .filter(classItem => selectedCategory === "All" || classItem.categoryId === selectedCategory)
                            .map((classItem) => (
                                <CardClass
                                    key={classItem.id}
                                    title={classItem.name}
                                    instructor="John Doe"
                                    category={categories.find(cat => cat.id === classItem.categoryId)?.name || "Unknown"}
                                    rating={4.7}
                                    level={classItem.level}
                                    modules={10}
                                    duration={120}
                                    price={classItem.price}
                                    image="/assets/card-img.jpeg"
                                />
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}
