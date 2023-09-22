import { Request, Response, NextFunction } from "express";
import { createAccessToken } from "../../libs/jwt";
import bcrypt from "bcryptjs";
import Clients from "../../models/clients";

const authLoginHandler = async (
  req: Request,
  res: Response,
  _next: NextFunction
) => {
  try {
    const { email, password } = req.body;

    const clientFound = await Clients.findOne({ email });

    if (!clientFound)
      return res.status(400).json({ message: "usuario no encontrado" });

    const isMatch = await bcrypt.compare(password, clientFound.password);

    if (!isMatch)
      return res.status(400).json({ message: "contraseña incorrecta" });

    const token = await createAccessToken({
      email: clientFound.email,
      _id: clientFound._id,
      firstName: clientFound.firstName,
      lastName: clientFound.lastName,
      dni: clientFound.dni,
      createdAt: clientFound.createdAt,
      updatedAt: clientFound.updatedAt,
      isAdmin: clientFound.isAdmin,
      isActive: clientFound.isActive,
    });

    res.cookie("token", token);
    return res.json({
      token,
      isActive: clientFound.isActive,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).send("Error en el servidor");
  }
};

export default authLoginHandler;
