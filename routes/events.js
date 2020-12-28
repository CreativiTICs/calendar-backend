/*
Event Routes
/api/events
*/
const { Router } = require("express");
const { check } = require("express-validator");
const { getEvents, createEvent, updateEvent, deleteEvent } = require("../controllers/events");
const { isDate } = require("../helpers/isDate");
const { validarCampos } = require("../middlewares/validar-campos");
const { validarJWT } = require("../middlewares/validar-jwt");

const router = Router();

//Todas la rutas deben ser validadas con validarJWT
router.use(validarJWT);

//Get Event
router.get('/', getEvents);

//Create Event
router.post(
  "/",
  [
    check("title", "El título es obligatorio").not().isEmpty(),
    check("start", "La fecha de inicio es obligatoria").custom(isDate),
    check("end", "La fecha final es obligatoria").custom(isDate),
    validarCampos,
  ],
  createEvent
);

//Update Event
router.put("/:id", updateEvent);

//Delete Event
router.delete("/:id", deleteEvent);

module.exports= router;