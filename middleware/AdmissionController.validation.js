/* eslint-disable max-len */
const Joi = require('joi');

const validateParms = {
  admitPatient: (obj) => {
    const JoiSchema = Joi.object({
      patientId: Joi.string().min(34).max(36),
      admittedOn: Joi.date(),
      dischargedOn: Joi.date(),
      roomNumber: Joi.string().min(1),
      bedNumber: Joi.string().min(1),
      isDischarged: Joi.string().optional()
    });

    return JoiSchema.validate({
      patientId, admittedOn, dischargedOn, roomNumber, bedNumber, isDischarged
    } = obj);
  },
};

module.exports = validateParms;
