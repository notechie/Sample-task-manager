// src/middlewares/role.middleware.js
export const adminOnly = (req, res, next) => {
  if (req.user.role !== "admin")
    return res.status(403).json({ message: "Admin only" });
  next();
};
