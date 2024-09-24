import { app } from 'electron';
import path from 'node:path';
const daemonsDirName = 'daemons';
const getDameonsPath = (): string => {
  let daemonsPath = '';

  if (app.isPackaged) {
    // 打包后的应用
    daemonsPath = path.join(process.resourcesPath, daemonsDirName);
  } else {
    daemonsPath = path.join(app.getAppPath(), daemonsDirName);
  }
  return daemonsPath;
};

export { getDameonsPath };
