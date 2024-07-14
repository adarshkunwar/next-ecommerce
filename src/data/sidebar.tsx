import category from "@/data/categories.json"


interface dataCategory {
    content: string,
    isTrue: boolean
}

type sidebardata = {
    heading: string;
    content: { isTrue: boolean, content: string }[]
}

const dataCategory: dataCategory[] = category.map(cat => ({
    ...cat,
    content: cat.name,
    isTrue: false
}))



const data: sidebardata[] = [
    {
        "heading": "Category",
        "content": dataCategory
    },
    {
        "heading": "Price",
        "content": [
            {
                "isTrue": true,
                "content": "All"
            },
            {
                "isTrue": false,
                "content": "Less than $20"
            },
            {
                "isTrue": false,
                "content": "$20 - $100"
            },
            {
                "isTrue": false,
                "content": "More than $100"
            }
        ]
    },
    {
        "heading": "Rating",
        "content": [
            {
                "isTrue": true,
                "content": "All"
            },
            {
                "isTrue": false,
                "content": "4 stars and up"
            },
            {
                "isTrue": false,
                "content": "3 stars and up"
            },
            {
                "isTrue": false,
                "content": "2 stars and up"
            },
            {
                "isTrue": false,
                "content": "1 star and up"
            }
        ]
    },
    {
        "heading": "Brand",
        "content": [
            {
                "isTrue": true,
                "content": "All"
            },
            {
                "isTrue": false,
                "content": "Brand 1"
            },
            {
                "isTrue": false,
                "content": "Brand 2"
            },
            {
                "isTrue": false,
                "content": "Brand 3"
            }
        ]
    }
]

export default data
