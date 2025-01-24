# installing express
```
    npm i express
```

# setting up an express app
```
    import express from "express" //import
    const app = express()

    app.get('/', (req, res) => {
        res.send('Home')
        console.log(`the path is :${req.url}`)
        }
    )

    app.listen(port, () => {
        console.log(`app is listening on port : http://localhost:${port}`)
        }
    )
```