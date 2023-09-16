import getPrismaInstance from "../utils/PrismaClient.js";

export const checkUser = async (req, res, next) => {
  const { email } = req.body;
  try {
    if (!email) return res.status(404).json({ msg: "email is required" });
    const prisma = getPrismaInstance();
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      return res.json({ status: false, msg: "user not found" });
    } else {
      return res.json({ status: true, msg: user });
    }
  } catch (error) {
    next(error);
  }
};
