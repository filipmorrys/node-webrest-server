import { envs } from "./config/env";
import { AppRoutes } from "./presentation/routes";
import { Server } from "./presentation/server";


(async () => {
  main();
})();


function main() {
  const server = new Server({
    port: envs.PORT,
    publicPath: envs.PUBLIC_PATH,
    routes: AppRoutes.routes,
  });
  server.start();
}