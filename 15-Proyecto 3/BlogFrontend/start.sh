#!/bin/bash

echo "--------------------------------------------------"
echo "🌱 PREPARANDO EL ENTORNO DE DESARROLLO EN LINUX"
echo "--------------------------------------------------"

# 1. MongoDB
echo " [1] Verificando y arrancando MongoDB..."
sudo systemctl start mongod

# 2. Backend
echo " [2] Iniciando el Backend..."
# Redirigimos la salida al vacío para que no bloquee el script
#cd "./api-rest"
cd "/home/ronald/Documentos/Master en React/15-Proyecto 3/api-rest"
pnpm dev > /dev/null 2>&1 &

# 3. Frontend
echo " [3] Iniciando el Frontend..."
# Redirigimos la salida al vacío también
#cd "../Frontend"
cd "/home/ronald/Documentos/Master en React/15-Proyecto 3/BlogFrontend"
pnpm dev > /dev/null 2>&1 &

# Mensaje final
echo "--------------------------------------------------"
echo "✨ ¡Todo configurado! Los servicios corren en segundo plano."
echo "   - MongoDB: Activo vía systemctl"
echo "   - Backend: http://localhost:3000"
echo "   - Frontend: http://localhost:5173 (Vite)"
echo "--------------------------------------------------"
echo "Nota: Si quieres ver los logs, tendrás que abrir el proyecto en VS Code o en otra pestaña."