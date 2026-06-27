import { Router } from "express";
import { CompanyController } from "../controller/CompanyController";
import { SalaryController } from "../controller/SalaryController";
import { LocationController } from "../controller/LocationController";
import { Factontroller } from "../controller/FactController";
import { body, query } from "express-validator";
import { handleInputErrors } from "../middleware/validation";

const router = Router();

router.get(
  "/company-all",
  query("take").isNumeric().withMessage("The value must be numeric"),
  query("skip").isNumeric().withMessage("The value must be numeric"),
  CompanyController.getAll,
);
router.get(
  "/salary-all",
  query("take").isNumeric().withMessage("The value must be numeric"),
  query("skip").isNumeric().withMessage("The value must be numeric"),
  SalaryController.getAll,
);
router.get(
  "/location-all",
  query("take").isNumeric().withMessage("The value must be numeric"),
  query("skip").isNumeric().withMessage("The value must be numeric"),
  LocationController.getAll,
);
router.get(
  "/fact-all",
  query("take").isNumeric().withMessage("The value must be numeric"),
  query("skip").isNumeric().withMessage("The value must be numeric"),
  Factontroller.getAll,
);
router.post(
  "/create-fact",
  body("job_title").notEmpty().withMessage("The title is required"),
  body("rating").isNumeric().withMessage("The rating is not valid"),
  body("founded").isNumeric().withMessage("The founded is not valid"),
  body("revenue").notEmpty().withMessage("The revenue is required"),
  body("location_id").isNumeric().withMessage("The location is not valid"),
  body("company_id").isNumeric().withMessage("The company is not valid"),
  body("salary_id").isNumeric().withMessage("The salary is not valid"),
  handleInputErrors,
  Factontroller.create,
);
export default router;
