import express from "express";
import db from "./models/index.js";
import userRoute from "./routes/user.route.js";
import workoutRoute from "./routes/workout.route.js";

const app = express();

// Middleware para JSON
app.use(express.json());

// Rotas
app.use("/users", userRoute);
app.use("/workouts", workoutRoute);

// Rota padrão
app.get("/", (req, res) => {
    res.send("EXPRESS BACKEND COM POSTGRESQL");
});

// Sincronizar banco de dados
db.sequelize.sync()
    .then(() => {
        console.log("Database synchronized");
    })
    .catch((error) => {
        console.error("Error synchronizing database:", error);
    });

// Exportar o app para o Vercel
export default app;

