const express = require("express");
const path = require("path");

const userRoutes = require("./routes/user");
const publicRoutes = require("./routes/public");

const app = express();

app.use(express.json());
app.use(
    express.urlencoded({
        extended: true,
    })
);

app.use(express.static(path.join(__dirname, "public")));


// app.use((req, res, next) => {
//     console.log("Hora:", Date.now());
//     next();
// });

app.use("/user", userRoutes);
app.use("/public", publicRoutes);


app.listen(3000, function() {
    console.log("App corriendo en el puerto 3000");
});