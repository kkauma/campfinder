const mongoose = require("mongoose");
const cities = require("./cities");
const { places, descriptors } = require("./seedHelpers");
const Campground = require("../models/campground");

mongoose.connect("mongodb://127.0.0.1:27017/yelp-camp");

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Database connected");
});

const sample = (arr) => arr[Math.floor(Math.random() * arr.length)];

const seedDB = async () => {
  await Campground.deleteMany({});
  for (let i = 0; i < 50; i++) {
    const random1000 = Math.floor(Math.random() * 1000);
    const price = Math.floor(Math.random() * 20) + 10;
    const camp = new Campground({
      // Your User ID
      author: "6748ec3398332f3633f11afe",
      location: `${cities[random1000].city}, ${cities[random1000].state}`,
      title: `${sample(descriptors)} ${sample(places)}`,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id quas quibusdam blanditiis officiis odio numquam repudiandae architecto quo provident cupiditate? Dicta, neque perferendis. Voluptatem accusamus quidem commodi a quam esse?",
      price,
      geometry: {
        type: "Point",
        coordinates: [-113.1331, 47.0202],
      },
      images: [
        {
          url: "https://res.cloudinary.com/dmjxujfwz/image/upload/v1737233574/YelpCamp/boayipxhky32kviqqpto.jpg",
          filename: "YelpCamp/boayipxhky32kviqqpto",
        },
        {
          url: "https://res.cloudinary.com/dmjxujfwz/image/upload/v1737233575/YelpCamp/ejpxhbf0b67badvp0rbf.jpg",
          filename: "YelpCamp/ejpxhbf0b67badvp0rbf",
        },
      ],
    });
    await camp.save();
  }
};

seedDB().then(() => {
  mongoose.connection.close();
});
