#!/bin/bash
curl -X POST http://localhost:3000/workouts \
-H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNzQ2NzM4MDIyLCJleHAiOjE3NDY3NDE2MjJ9.QbjDyJ-wQnShPCYxuwzf8Gy9Wa00s8T7MOC6zMPYCIo" \
-H "Content-Type: application/json" \
-d '{
    "name": "Corrida",
    "description": "Corrida matinal",
    "duration": 30,
    "date": "2025-05-09"
}'