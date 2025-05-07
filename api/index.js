import express from "express";
import db from "./models/index.js";
import userRoute from "./routes/user.route.js";
import workoutRoutes from "./routes/workout.route.js";

db.sequelize.sync()
    .then(() => {
        console.log("Database synchronized");
    })
    .catch((error) => {
        console.error("Error synchronizing database:", error);
    });

const app = express();

app.use(express.json());

app.use("/users", userRoute);
app.use("/workouts", workoutRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

