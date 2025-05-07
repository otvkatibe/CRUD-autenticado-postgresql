curl -X POST http://localhost:3000/users/login \
-H "Content-Type: application/json" \
-d '{
    "username": "testuser",
    "email": "testuser@example.com",
    "password": "password123"
}'