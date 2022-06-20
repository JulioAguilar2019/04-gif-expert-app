import { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Naruto'])


    const onAddCategory = (newCategory) => {
        console.log(newCategory);
        if (!categories.includes(newCategory)) {
            setCategories([newCategory, ...categories])
        }
    }

    return (
        <>
            <h1>Gif Expert App </h1>

            <AddCategory
                onNewCategory={onAddCategory}
            />

            {
                categories.map((category) => (
                    <GifGrid key={category} category={category} />
                ))
            }
        </>
    )
}
