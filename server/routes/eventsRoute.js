import express from "express";
import {
  addEventRegisterFormController,
  eventRegistrationFormController,
  getEventRegistrationFormController,
  pastEventCreateController,
  pastEventDeleteControllers,
  pastEventReadController,
  postEventRegistrationController,
  presentEventCreateController,
  presentEventDeleteControllers,
  presentEventReadController,
  toggleRegistrationController,
} from "../controllers/eventController.js";
import {
  eventRegisterFormCreateValidation,
  pastEventCreateValidation,
  presentEventCreateValidation,
} from "../middlewares/eventValidation.js";
import {
  uploadEventRegisterImage,
  uploadEventRegisterUserImage,
  uploadPastEventImage,
  uploadPresentEventImage,
} from "../middlewares/multerMiddleware.js";

const eventRouter = express.Router();

eventRouter.post(
  "/createPastEvent",
  uploadPastEventImage,
  pastEventCreateValidation,
  pastEventCreateController
);
eventRouter.get("/pastEvents", pastEventReadController);
eventRouter.delete("/deletePastEvent/:id", pastEventDeleteControllers);

eventRouter.post(
  "/createPresentEvent",
  uploadPresentEventImage,
  presentEventCreateValidation,
  presentEventCreateController
);
eventRouter.get("/presentEvents", presentEventReadController);
eventRouter.delete("/deletePresentEvent/:id", presentEventDeleteControllers);
eventRouter.post("/toggleRegistration/:id", toggleRegistrationController);

eventRouter.post(
  "/addEventRegisterForm",
  uploadEventRegisterImage,
  eventRegisterFormCreateValidation,
  addEventRegisterFormController
);
eventRouter.get("/eventRegistrationForm/:id", eventRegistrationFormController);
eventRouter.get(
  "/getEventRegistrationForm",
  getEventRegistrationFormController
);
eventRouter.post(
  "/postEventRegistrationForm",
  // uploadEventRegisterImage,
  postEventRegistrationController
);

export default eventRouter;
