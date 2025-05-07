#!/bin/bash
curl -X PUT http://localhost:3000/workouts/ae9ea983-a65e-4329-bb03-ed43e3bbdf35 \
-H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNzQ2NTkwODU0LCJleHAiOjE3NDY1OTQ0NTR9.cysZG7xogViusGf6xPa2vTTODuvl0Za9k15YbH12xcs" \
-H "Content-Type: application/json" \
-d '{
    "name": "Corrida Atualizada",
    "description": "Corrida matinal atualizada",
    "duration": 45,
    "date": "2025-05-08"
}'