import { Router } from "express";
import { body, query } from "express-validator";
import { CustomerController } from "../Controller/CustomerController";
import { CategoryController } from "../Controller/CategoryController";
import { DeviceController } from "../Controller/DeviceController";
import { PaymentController } from "../Controller/PaymentController";
import { FactController } from "../Controller/FactController";
import { GoldController } from "../Controller/GoldController";

const router = Router();

router.get(
  "/customers",
  query("take").isNumeric().withMessage("The value must be numeric"),
  query("skip").isNumeric().withMessage("The value must be numeric"),
  CustomerController.getAll,
);
router.get(
  "/categorys",
  query("take").isNumeric().withMessage("The value must be numeric"),
  query("skip").isNumeric().withMessage("The value must be numeric"),
  CategoryController.getAll,
);

router.get(
  "/devices",
  query("take").isNumeric().withMessage("The value must be numeric"),
  query("skip").isNumeric().withMessage("The value must be numeric"),
  DeviceController.getAll,
);

router.get(
  "/payments",
  query("take").isNumeric().withMessage("The value must be numeric"),
  query("skip").isNumeric().withMessage("The value must be numeric"),
  PaymentController.getAll,
);

router.get(
  "/facts",
  query("take").isNumeric().withMessage("The value must be numeric"),
  query("skip").isNumeric().withMessage("The value must be numeric"),
  FactController.getAll,
);

router.get(
  "/gold-category",
  query("take").isNumeric().withMessage("The value must be numeric"),
  query("skip").isNumeric().withMessage("The value must be numeric"),
  GoldController.getGoldCategory,
);

router.get(
  "/gold-category",
  query("take").isNumeric().withMessage("The value must be numeric"),
  query("skip").isNumeric().withMessage("The value must be numeric"),
  GoldController.getGoldCategory,
);

router.get(
  "/gold-city",
  query("take").isNumeric().withMessage("The value must be numeric"),
  query("skip").isNumeric().withMessage("The value must be numeric"),
  GoldController.getGoldCity,
);

router.get(
  "/gold-customer",
  query("take").isNumeric().withMessage("The value must be numeric"),
  query("skip").isNumeric().withMessage("The value must be numeric"),
  GoldController.getGoldCustomers,
);





export default router