import { body } from "express-validator";

export const validacionesDeTask = [
  body("title")
    .isString()
    .withMessage("El titulo debe ser un string")
    .notEmpty()
    .withMessage("El titulo no puede estar vacio"),
  body("description")
    .isString()
    .withMessage("La descripcion debe ser un string")
    .notEmpty()
    .withMessage("La descripcion no puede estar vacia"),
  body("isComplete")
    .isBoolean()
    .withMessage("isComplete debe ser un boolean")
    .notEmpty()
    .withMessage("isComplete no puede estar vacio"),
];

export const validacionesDeTaskUpdate = [
  body("title")
    .optional()
    .isString()
    .withMessage("El titulo debe ser un string"),
  body("description").optional().isString("La descripción debe ser un string"),
  body("isComplete").isBoolean("isComplete debe ser un booleano"),
];
