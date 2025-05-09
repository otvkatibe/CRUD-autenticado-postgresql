curl -X POST https://crud-autenticado-postgresql.vercel.app/users/register \
-H "Content-Type: application/json" \
-d '{
    "username": "testuser",
    "email": "testuser@example.com",
    "password": "password123"
}'