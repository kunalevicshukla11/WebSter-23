import AsyncErrorHandler from "../error/CatchAsyncError.js";
import Errorhandler from "../error/errorClass.js";
import { MessMenuModel as Messmenu } from "../models/MessMenuModel.js";

const createMessMenu = AsyncErrorHandler(async (req, res, next) => {
  const data = req.body;
  const HostelName = data?.HostelName;
  const oldmenu = await Messmenu.findOne({ HostelName });
  if (oldmenu) {
    return next(
      new Errorhandler(
        "Mess Menu already added! However You can Update the menu",
        400
      )
    );
  }
  const newMessMenu = await Messmenu.create(data);
  res.status(200).json({
    success: true,
    message: "New Mess Menu Created SuccessFully!",
    newMessMenu,
  });
});

const updateMenu = AsyncErrorHandler(async (req, res, next) => {
  const data = req.body;
  const HostelName = data.HostelName;

  const updatedMenu = await Messmenu.findOneAndUpdate({ HostelName }, data);
  res.status(200).json({
    success: true,
    message: "Updated",
    updatedMenu,
  });
});

const getMessmenu = AsyncErrorHandler(async (req, res, next) => {
  const { HostelName } = req.body;

  const menu = await Messmenu.findOne({ HostelName: HostelName });

  res.status(200).json({
    success: true,
    message: "Fetched Successfully!",
    menu,
  });
});

export { createMessMenu, updateMenu, getMessmenu };
