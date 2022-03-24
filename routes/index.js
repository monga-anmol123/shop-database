const express = require("express");
const req = require("express/lib/request");
const async = require("hbs/lib/async");
const router = express.Router();
const userModel = require("../model/shop_schema");

router.get("/entry", async (req, res) => {
  res.render("entry");
});

router.post("/entry", async (request, response) => {
  console.log(request.body);
  const user = new userModel(request.body);

  console.log("user", user);
  user.name = user.name.toLowerCase();
  user.address = user.address.toLowerCase();

  try {
    await user.save();
    response.send(
      '<HTML> <HEAD> <script type = "text/javascript">  window.alert("Entry Created Successfully for MEC database");   </script> <meta http-equiv = "refresh" content = "1; url = /home" /></HEAD> <BODY></BODY> </HTML>'
    );
  } catch (error) {
    response.status(500).send(error);
  }
});

router.get("/details", async (req, res) => {
  res.render("details");
});

router.post("/details", async (request, response) => {
  try {
    console.log(request.body);

    const s = request.body.name;
    const regex = new RegExp(s, "i"); // i for case insensitive
    const users = await userModel.find({ name: {$regex : regex} });

    console.log(users);
    if (users.length == 0) response.send("Koi Record Hai Hi Nahi");
    else {
      response.render("show_list", { userList: users });
    }
  } catch (error) {
    console.log(error);
    response.status(500).send(error);
  }
});

module.exports = router;
