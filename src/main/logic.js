import { ipcMain } from "electron";

console.log("Running from logic file");

ipcMain.on("something", (event, args) => {
  console.log("Something event ", args);
});
