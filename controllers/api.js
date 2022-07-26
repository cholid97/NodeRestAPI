const Tracking = require("../models/tracking");
const User = require("../models/user");
const jwt = require("jsonwebtoken");

exports.postAddProduct = (req, res, next) => {
  Tracking.create({
    tracking_id: req.body.tracking_id,
    rowstate_name: req.body.rowstate_name,
    pod_status_name: req.body.pod_status_name,
    tracking_doc_no: req.body.tracking_doc_no,
    reference_no: req.body.reference_no,
    create_date: req.body.create_date,
    counter_name: req.body.counter_name,
    user_inp: req.body.user_inp,
    description: req.body.description,
    origin: req.body.origin,
    destination: req.body.destination,
    receiver_name: req.body.receiver_name,
    koli: req.body.koli,
    kilo: req.body.kilo,
    packing_cost: req.body.packing_cost,
    surcharge_cost: req.body.surcharge_cost,
    insurance_cost: req.body.insurance_cost,
    rowstate: req.body.rowstate,
    pod_receiver_name: req.body.pod_receiver_name,
    pod_relation_name: req.body.pod_relation_name,
    latitude: req.body.latitude,
    longitude: req.body.longitude,
    pod_type: req.body.pod_type,
    awb_no: req.body.awb_no,
  })
    .then(() => {
      return res.status(200).json({
        status: "Success",
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.getProducts = (req, res, next) => {
  req.user
    .getProducts()
    .then((products) => {
      console.log(products);
      res.status(200).json({ status: "Success", data: products });
    })
    .catch((err) => console.log(err));
};

exports.postAuth = (req, res, next) => {
  User.findOne({
    where: { username: req.body.username, password: req.body.password },
  }).then((result) => {
    if (result) {
      const token = jwt.sign(
        { _id: result.username, password: result.password },
        process.env.SECRET_KEY,
        { expiresIn: "5min" }
      );

      if (token) {
        res.status(200).json({
          status: "success",
          token: token,
        });
      } else {
        res.status(400).json({ status: "Failed" });
      }
    } else {
      return res
        .status(400)
        .json({ status: "Failed", Message: "Akun tidak ditemukan" });
    }
  });
};
