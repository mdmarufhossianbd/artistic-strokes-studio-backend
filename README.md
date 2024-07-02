# Artistic Strokes Studio Backend

Artistic Strokes Studio is a digital painting shop where customers can explore and purchase a wide range of beautifully crafted artworks. Whether you're looking for a unique piece to enhance your space or want to commission a custom painting that meets your specific preferences, our studio offers the perfect solution. Enjoy the convenience of browsing and ordering stunning digital art tailored to your taste, all from the comfort of your home.

# How can you run it in your local machine
- step 1
  ```
  git clone https://github.com/mdmarufhossianbd/artistic-strokes-studio-backend.git
  ```
- step 2
  ```
  npm install
  ```
- step 3
  ```
  npm run dev
  ```
- step 4 [ note : setup .env.local file. In the root folder of this project create a .env.local file.]
  ```
  VITE_APIKEY=FIREBASE_APIKEY
  VITE_AUTHDOMAIN=FIREBASE_AUTHDOMAIN
  VITE_PROJECTID=FIREBASE_PROJECTID
  VITE_STORAGEBUCKET=FIREBASE_STORAGEBUCKET
  VITE_MESSAGINGSENDERID=FIREBASE_MESSAGINGSENDERID
  VITE_APPID=FIREBASE_APPID
  VITE_IMAGE_HOSTING_KEY=FIREBASE_IMAGE_HOSTING_KEY
  ```

# Dependencies
- Node.js
- Express
- cors
- cookie-parser
- dotenv
- mongodb

# License
This project is licensed under the MIT License. See the LICENSE file for details.
