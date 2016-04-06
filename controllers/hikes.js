var express = require('express');
var Hike = require('../models/hike');
var router = express.Router();

router.route('/')
  .get(function(req, res) {
    Hike.find(function(err, hikes) {
      if (err) return res.status(500).send(err);
      res.send(hikes);
    });
  })
  .post(function(req, res) {
    Hike.create(req.body, function(err, hike) {
      if (err) return res.status(500).send(err);
      res.send(hike);
    });
  });

router.route('/:id')
  .get(function(req, res) {
    Hike.findById(req.params.id, function(err, hike) {
      if (err) return res.status(500).send(err);
      res.send(hike);
    });
  })
  // .put(function(req, res) {
  //   Recipe.findByIdAndUpdate(req.params.id, req.body, function(err) {
  //     if (err) return res.status(500).send(err);
  //     res.send({'message': 'success'});
  //   });
  // })
  .delete(function(req, res) {
    Hike.findByIdAndRemove(req.params.id, function(err) {
      if (err) return res.status(500).send(err);
      res.send({'message': 'success'});
    });
  });

module.exports = router;
