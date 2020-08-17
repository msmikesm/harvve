
interface conf {
  hostname: string;
  port: any;
}


export const serverConf: conf = {
  hostname: "127.0.0.1",
  port: process.env.PORT || 1337
};

