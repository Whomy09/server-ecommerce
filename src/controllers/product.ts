import { Handler } from "express";

export const getProducts: Handler = (req, res) => {
  try {
    res.status(200).json({
      message: 'Hi'
    })
  } catch (error) {
    res.status(400).json({
      message: `${error}`
    })
  }
}