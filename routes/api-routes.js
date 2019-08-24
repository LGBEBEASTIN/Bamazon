let db = require("../models");

module.exports = function (app) {

    app.get("/api/products", function (req, res) {
        db.Post.findAll({})
            .then(function (dbPost) {
                res.json(dbPost);
            });
    });

    app.post("/api/products", function (req, res) {
        db.Post.create(req.body)
            .then(function (dbPost) {
                res.json(dbPost);
            });
    });

    app.get("/api/products/:id", function (req, res) {
        db.Post.findOne({
            where: {
                id: req.params.id
            }
        })
            .then(function (dbPost) {
                res.json(dbPost);
            });
    });

    app.put("/api/products", function (req, res) {
        db.Post.update(req.body,
            {
                where: {
                    id: req.body.id
                }
            })
            .then(function (dbPost) {
                res.json(dbPost);
            });
    });

    app.delete("/api/products/:id", function (req, res) {
        db.Post.destroy({
          where: {
            id: req.params.id
          }
        })
          .then(function (dbPost) {
            res.json(dbPost);
          });
      });
      
}