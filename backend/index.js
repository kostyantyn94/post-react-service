const express = require("express");
const cors = require("cors");

const usersRoutes = require("./routes/users");
const userRoute = require("./routes/user");
const profileRoute = require("./routes/profiles");

const app = express();

const sequelize = require("./models/index");
const User = require("./models/User");

app.use(express.json());
app.use(cors());

app.get("/", (req, res, next) => {
  res.json({ status: "Api is running on /api" });
});
app.use("/api/users", usersRoutes);
app.use("/api/user", userRoute);
app.use("/api/profiles", profileRoute);

app.get("*", (req, res) => {
  res.status(404).json({ errors: { body: ["Nof found"] } });
});

sequelize
  .sync()
  .then((result) => {
    app.listen(3001, "localhost", () => {
      console.log("Server is on");
    });
  })
  .catch((err) => console.log(err));
