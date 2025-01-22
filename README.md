# 🏕️ CampFinder

<p align="center">
  <img src="https://images.unsplash.com/photo-1559521783-1d1599583485?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80" alt="CampFinder Landing Page" width="100%">
</p>

<p align="center">
  <a href="https://campfinder-bd1w.onrender.com/">
    <img src="https://img.shields.io/badge/Live_Demo-Visit_Site-2ea44f?style=for-the-badge" alt="Live Demo">
  </a>
</p>

## ✨ Features

- **🔐 User Authentication**: Complete user authentication system with registration, login, and logout functionality
- **🏕️ Campground Management**: Create, read, update, and delete campgrounds
- **📸 Image Upload**: Multiple image upload support with Cloudinary integration
- **🗺️ Interactive Maps**: Mapbox integration for location visualization
- **⭐ Reviews System**: Users can leave ratings and reviews for campgrounds
- **📱 Responsive Design**: Bootstrap-based responsive layout
- **🔒 Security Features**: Helmet middleware implementation for enhanced security

## 🛠️ Technologies Used

### 🎨 Frontend

- EJS (Embedded JavaScript templates)
- Bootstrap 5
- Mapbox GL JS

### ⚙️ Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- Passport.js (Authentication)

### ☁️ Cloud Services

- Cloudinary (Image hosting)
- Mapbox (Maps and Geocoding)
- MongoDB Atlas (Database hosting)

## 📋 Prerequisites

- Node.js (v20.15.1)
- MongoDB
- Cloudinary account
- Mapbox account

## 🔑 Environment Variables

Create a `.env` file in the root directory with the following variables:

```plaintext
DB_URL=your_mongodb_connection_string
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_KEY=your_cloudinary_key
CLOUDINARY_SECRET=your_cloudinary_secret
MAPBOX_TOKEN=your_mapbox_token
```

## 📥 Installation

1. Clone the repository:

```bash
git clone https://github.com/kkauma/campfinder.git
cd campfinder
```

2. Install dependencies:

```bash
npm install
```

3. Start the server:

```bash
node app.js
```

The application will be available at `http://localhost:3000`

## 📖 Usage

- Visit the homepage to view all campgrounds
- Create an account to add new campgrounds
- Click on individual campgrounds to view details and leave reviews
- Use the map interface to find campgrounds by location

## 🎯 Features in Detail

### 🏕️ Campgrounds

- Create new campgrounds with multiple images
- Add location data with automatic geocoding
- Edit and delete your own campgrounds
- View campground locations on an interactive map

### ⭐ Reviews

- Leave ratings (1-5 stars) and written reviews
- Delete your own reviews
- View all reviews for each campground

### 👤 User Authentication

- Secure user registration and login
- Protected routes for authenticated users
- User-specific actions (create, edit, delete)

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the ISC License.

## 🙏 Acknowledgments

- Original YelpCamp concept by Colt Steele
- Mapbox for mapping functionality
- Cloudinary for image management
- Bootstrap team for the UI framework
