import express from 'express'

const app = express()
const PORT = process.env.PORT || 3000




app.get("/", (req,res)=>{
    res.json({"data": "Server is up"})
})

app.get("/api/products", (req,res)=>{
    const products = [
        {
            id: 1,
            name: "Laptop",
            image: ""
        },
        {
            id: 2,
            name: "Desktop",
            image: ""
        },
        {
            id: 3,
            name: "Mouse",
            image: ""
        },
        {
            id: 4,
            name: "Keyboard",
            image: ""
        },
        {
            id: 5,
            name: "Speaker",
            image: ""
        },
    ]

    
    if(req.query.search){
        const filteredProducts = products.filter(products=> products.name.toLowerCase().includes(req.query.search.toLowerCase()))
        res.send(filteredProducts)
        return
    }
    setTimeout(()=>{
        res.send(products)
    }, 2000)
})


app.listen(PORT, ()=>{
    console.log(`Server is listening at http://localhost:${PORT}`)
})

