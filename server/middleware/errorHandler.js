export function notFound(req, res) {
  res.status(404).json({ success: false, message: "Route not found." });
}

export function errorHandler(err, req, res, next) {
  if (res.headersSent) {
    next(err);
    return;
  }

  const status = err.status || 500;
  if (status === 500) console.error(err);

  res.status(status).json({
    success: false,
    message: status === 500 ? "Something went wrong. Please try again." : err.message,
  });
}
