import React from 'react'
import { useEffect } from 'react'



export const Filter = ({ setActiveCategory, activeCategory, setFilter, jobs }) => {

    const categories = [
        {
            id: 0,
            name: "All",
            slug: "all"
        },
        {
            id: 19,
            name: "Software Development",
            slug: "software-dev"
        },
        {
            id: 18,
            name: "Customer Service",
            slug: "customer-support"
        },
        {
            id: 21,
            name: "Design",
            slug: "design"
        },
        {
            id: 28,
            name: "Marketing",
            slug: "marketing"
        },
        {
            id: 30,
            name: "Sales",
            slug: "sales"
        },
        {
            id: 23,
            name: "Product",
            slug: "product"
        },
        {
            id: 33,
            name: "Business",
            slug: "business"
        },
        {
            id: 24,
            name: "Data",
            slug: "data"
        },
        {
            id: 25,
            name: "DevOps / Sysadmin",
            slug: "devops"
        },
        {
            id: 26,
            name: "Finance / Legal",
            slug: "finance-legal"
        },
        {
            id: 27,
            name: "Human Resources",
            slug: "hr"
        },
        {
            id: 29,
            name: "QA",
            slug: "qa"
        },
        {
            id: 32,
            name: "Writing",
            slug: "writing"
        },
        {
            id: 22,
            name: "All others",
            slug: "all-others"
        }
    ]

    useEffect(() => {
        if (activeCategory === 'All') {
            setFilter(jobs)
            return;
        }
        const filtered = jobs.filter((job) => job.category.includes(activeCategory))
        setFilter(filtered)
        console.log(filtered)
    }, [activeCategory])

    return (
        <div className="filters">

            {categories.map(category => (
                <button
                    className={activeCategory === `${category.name}` ? "lightup" : ""}
                    onClick={() => setActiveCategory(`${category.name}`)}>
                    {category.name}
                </button>
            )
            )}
        </div>
    )
}
