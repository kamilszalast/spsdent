const db = require('../models')
const Doctor = db.doctor

exports.create = (req, res) => {
  // Validate request
  if (!req.body.nazwisko) {
    res.status(400).send({ message: 'Content can not be empty!' })
    return
  }

  // Create a Tutorial
  const doctor = new Doctor({
    imie: req.body.imie,
    nazwisko: req.body.nazwisko,
    email: req.body.email,
    telefon: req.body.telefon,
  })

  // Save Tutorial in the database
  doctor
    .save(doctor)
    .then((data) => {
      res.send(data)
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while creating the visits.',
      })
    })
}

exports.findAll = (req, res) => {
  const nazwisko = req.query.nazwisko
  let condition = nazwisko
    ? { nazwisko: { $regex: new RegExp(nazwisko), $options: 'i' } }
    : {}

  Doctor.find(condition)
    .then((data) => {
      res.send(data)
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occurred while retrieving visits.',
      })
    })
}

exports.findOne = (req, res) => {
  const id = req.params.id

  Doctor.findById(id)
    .then((data) => {
      if (!data)
        res.status(404).send({ message: 'Not found Visit with id ' + id })
      else res.send(data)
    })
    .catch((err) => {
      res.status(500).send({ message: 'Error retrieving Visit with id=' + id })
    })
}

exports.delete = (req, res) => {
  const id = req.params.id

  Doctor.findByIdAndRemove(id)
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Visit with id=${id}. Maybe Visit was not found!`,
        })
      } else {
        res.send({
          message: 'Visit was deleted successfully!',
        })
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Could not delete Visit with id=' + id,
      })
    })
}