const Sequelize = require("sequelize");

const sequelize = require("../util/database");

const Tracking = sequelize.define("tracking", {
  tracking_id: Sequelize.INTEGER,
  rowstate_name: Sequelize.STRING,
  pod_status_name: Sequelize.STRING,
  tracking_doc_no: Sequelize.STRING,
  reference_no: Sequelize.STRING,
  create_date: Sequelize.STRING,
  counter_name: Sequelize.STRING,
  user_inp: Sequelize.STRING,
  description: Sequelize.STRING,
  origin: Sequelize.STRING,
  destination: Sequelize.STRING,
  receiver_name: Sequelize.STRING,
  koli: Sequelize.INTEGER,
  kilo: Sequelize.INTEGER,
  packing_cost: Sequelize.INTEGER,
  surcharge_cost: Sequelize.INTEGER,
  insurance_cost: Sequelize.INTEGER,
  rowstate: Sequelize.STRING,
  pod_receiver_name: Sequelize.STRING,
  pod_relation_name: Sequelize.STRING,
  latitude: Sequelize.STRING,
  longitude: Sequelize.STRING,
  pod_type: Sequelize.STRING,
  awb_no: Sequelize.STRING,
});

module.exports = Tracking;
