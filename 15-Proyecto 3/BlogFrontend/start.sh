#!/bin/bash

echo "--------------------------------------------------"
echo "🌱 PREPARING THE DEVELOPMENT ENVIRONMENT IN LINUX"
echo "--------------------------------------------------"

# 1. MongoDB
echo " [1] Checking and starting MongoDB..."
sudo systemctl start mongod

# 2. Backend
echo " [2] Starting the Backend..."
# Redirecting output to /dev/null so it doesn't block the script
cd "./api-rest"
pnpm dev > /dev/null 2>&1 &

# 3. Frontend
echo " [3] Starting the Frontend..."
# Redirecting output to /dev/null as well
cd "../Frontend"
pnpm dev > /dev/null 2>&1 &

# Final message
echo "--------------------------------------------------"
echo "✨ Everything is set up! Services are running in the background."
echo "   - MongoDB: Active via systemctl"
echo "   - Backend: http://localhost:3000"
echo "   - Frontend: http://localhost:5173 (Vite)"
echo "--------------------------------------------------"
echo "Note: If you want to view the logs, you will need to open the project in VS Code or in another tab."