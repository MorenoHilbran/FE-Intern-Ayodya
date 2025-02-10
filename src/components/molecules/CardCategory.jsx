import { useEffect, useState } from "react";
import axios from "axios";

export default function CardCategory() {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:3000/api/category");
                setCategories(response.data.datas);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-[20px] justify-center">
            {categories.map((category) => (
                <div key={category.id} className="flex flex-col items-center pl-[5px] pr-[5px]">
                    <div className="w-[140px] h-[100px] rounded-[25px] overflow-hidden">
                        <img
                            src={category.imageSrc || "/assets/card-img.jpeg"}
                            alt={category.name}
                            className="w-full h-full"
                        />
                    </div>
                    <h3 className="text-md font-semibold mt-2 text-center">{category.name}</h3>
                </div>
            ))}
        </div>
    );
}
