import app from "./index.js";

const PORT = process.env.PORT || 3000;

// Iniciar o servidor localmente
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});