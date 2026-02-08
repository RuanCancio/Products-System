import app from "./app.js"

const server = app.listen(3000, ()=> {
    console.log("Server running on http://localhost:3000")
})

export default server