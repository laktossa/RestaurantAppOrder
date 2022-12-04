# RestaurantApp

# Server / Backend

# Server Postgres port 3001 (folder BE/Server)

- install semua dependencies dengan command "npm i"
- jalankan server dengan command "npm start"
- testing jalankan commant "npm test"

# Server MongoDB port 3002 (folder BE/serverMongo)

- install semua dependencies dengan command "npm i"
- jalankan server dengan command "nodemon app"

# Orchestrator port 3000 (folder BE/orchestrator)

- install semua dependencies dengan command "npm i"
- jalankan server dengan command "nodemon app"

# Frontend

- install semua dependencies dengan command "npm i"
- jalankan expo dengan command "npm start"

notes :
-server menggunakan ngrok untuk wiring Backend ke Frontend
-hubungkan baseURL orchestrator yang berjalan pada port 3000 dengan ngrok
-setelah terhubung, copy URL yang di dapat dari ngrok
-paste URL ngrok ke folder FE/restautantApp/src/store/sliceOrder pada variabel BASE_URL
