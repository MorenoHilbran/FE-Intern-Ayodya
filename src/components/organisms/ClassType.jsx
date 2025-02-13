import { useState, useEffect } from "react";
import axios from "axios";
import CardType from "../molecules/CardType";

export default function ClassType() {
    const [categories, setCategories] = useState([]);
    const [classes, setClasses] = useState([]); 
    const [selectedCategory, setSelectedCategory] = useState("All");

    // Fetch data kategori dan kelas
    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await axios.get("http://localhost:3000/api/category");
                setCategories(response.data.datas);
            } catch (error) {
                console.error("Error fetching categories:", error);
            }
        };

        const fetchClasses = async () => {
            try {
                const response = await axios.get("http://localhost:3000/api/class"); 
                setClasses(response.data.datas);
            } catch (error) {
                console.error("Error fetching classes:", error);
            }
        };

        fetchCategories();
        fetchClasses();
    }, []);

    return (
        <div className="flex flex-col">
            
            <div className="w-full flex gap-6 mb-4">
                <button
                    className={`border-white  rounded-[15px] w-32 h-10 text-center transition-colors duration-200 cursor-pointer font-semibold ${
                        selectedCategory === "All" ? "bg-[#6148FF] text-white" : "bg-white hover:bg-[#6148FF] hover:text-white text-[#8A8A8A]"
                    }`}
                    onClick={() => setSelectedCategory("All")}
                >
                    All
                </button>

                <button
                    className={`border-white rounded-[15px] w-72 h-10 text-center transition-colors duration-200 cursor-pointer font-semibold ${
                        selectedCategory === "Premium" ? "bg-[#6148FF] text-white" : "bg-white hover:bg-[#6148FF] hover:text-white text-[#8A8A8A]"
                    }`}
                    onClick={() => setSelectedCategory("Premium")}
                >
                    Kelas Premium
                </button>

                <button
                    className={`border-white rounded-[15px] w-56 h-10 text-center transition-colors duration-200 cursor-pointer font-semibold ${
                        selectedCategory === "Free" ? "bg-[#6148FF] text-white" : "bg-white hover:bg-[#6148FF] hover:text-white text-[#8A8A8A]"
                    }`}
                    onClick={() => setSelectedCategory("Free")}
                >
                    Kelas Gratis
                </button>
            </div>

            <div className="grid grid-cols-2 gap-4 py-[16px] w-full">
                {classes
                    .filter((classItem) => 
                        selectedCategory === "All" || classItem.type === selectedCategory
                    )
                    .map((classItem) => (
                        <CardType
                            key={classItem.id}
                            title={classItem.name}
                            instructor="John Doe"
                            category={categories.find(cat => cat.id === classItem.categoryId)?.name || "Unknown"}
                            rating={4.7}
                            level={classItem.level}
                            modules={10}
                            duration={120}
                            type={classItem.type}
                            image="/assets/card-img.jpeg"
                        />
                    ))
                }
            </div>
        </div>
    );
}
