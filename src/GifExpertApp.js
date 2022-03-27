import { useState } from "react"
import { AddCategory } from "./components/AddCategory"
import { GifGrid } from "./components/GifGrid"

export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['DragonBall'])
    // const handleAdd = () => {
    //     // setCategories([...categories,'4']);
    //     setCategories(cat => [...cat, '4']);
    // }
    return (
        <>
            <h2>StickExpertApp</h2>
            <AddCategory setCategories={setCategories} />
            <hr></hr>

            <ul>
                {
                    categories.map(category => (
                        <GifGrid
                            key={category}
                            category={category}
                        />
                    ))
                }
            </ul>
        </>
    )
}
