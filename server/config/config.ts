import * as fs from "fs";

interface conf {
  hostname: string;
  port: any;
}


export const serverConf: conf = {
  hostname: "127.0.0.1",
  port: process.env.PORT || 3000
};

