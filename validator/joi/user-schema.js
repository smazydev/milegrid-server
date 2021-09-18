let Joi = require('joi');

module.exports = Joi.object().keys({
    name: Joi.string().required().error(() => 'Must be a string'),
    userID: Joi.string().required().error(() => 'Must be a string'),
    avatar: Joi.string().required().error(() => 'Must be a string'),
    rights: Joi.string().required().error(() => 'Must be a string'),
})