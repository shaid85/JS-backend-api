import express from 'express';
import path from 'path';
import cors from 'cors';
import cookieParser from 'cookie-parser';

const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true, limit: "16kb"}))
app.use(express.static("public"))
app.use(cookieParser())

// Routes
import userRouter from './routes/user.routes.js';

// routes declaration
app.use("/api/v1/users", userRouter)

app.use(express.static('dist'))
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});
// app.get('/', (req, res) => {
//     res.send('Server Start')
//   })
app.get('/api/v1/users/hello', (req, res) => {
    res.send('Hello vercel proxy text')
  })


export { app }