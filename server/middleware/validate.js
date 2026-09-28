export function validateBody(validate) {
  return (req, res, next) => {
    const { errors, value } = validate(req.body || {});
    if (Object.keys(errors).length) {
      return res.status(400).json({
        success: false,
        message: "Please check the form and try again.",
        errors,
      });
    }
    req.validated = value;
    return next();
  };
}
