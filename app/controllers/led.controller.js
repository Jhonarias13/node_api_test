const { httpError } = require("../helpers/handleError");
const switchModel = require('../models/switch.model');

const getLed = async (req, res) => {
  try {
    const listLed = await switchModel.find({});
    res.send({data: listLed[0]});
  } catch (err) {
    httpError(res, err)
  }
};

const createLed = async(req, res) => {
  try {
    const {led} = req.body;
    const resDetail = await switchModel.create({
      led
    });
    res.send({data: resDetail});
  } catch (err) {
    httpError(res, err)
  }
};

const updateLed = async (req, res) => {
  try {
    const {_id, led} = req.body

    const updateLed = await switchModel.updateOne({_id}, {$set: {led: led}});
    res.send('success update!');
  } catch (err) {
    httpError(res, err)
  }
};

module.exports = { getLed, createLed, updateLed };
