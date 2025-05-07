#!/bin/bash
curl -X POST http://localhost:3000/workouts \
-H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNzQ2NTkwODU0LCJleHAiOjE3NDY1OTQ0NTR9.cysZG7xogViusGf6xPa2vTTODuvl0Za9k15YbH12xcs" \
-H "Content-Type: application/json" \
-d '{
    "name": "Corrida",
    "description": "Corrida matinal",
    "duration": 30,
    "date": "2025-05-08"
}'