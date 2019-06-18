import express from "express";
import React from "react";
import { render } from "@jaredpalmer/after";
import routes from "./routes";
import { Provider } from "react-redux";
import { renderToString } from "react-dom/server";

import createStore from "./helpers/createStore";
import Html from "./helpers/Html";

const assets = require(process.env.RAZZLE_ASSETS_MANIFEST);

const server = express();

server
  .disable("x-powered-by")
  .use(express.static(process.env.RAZZLE_PUBLIC_DIR))
  .get("/*", async (req, res) => {
    try {
      const store = createStore();

      const customRenderer = node => {
        const App = <Provider store={store}>{node}</Provider>;
        return {
          html: renderToString(App),
          serverState: store.getState()
        };
      };

      const html = await render({
        req,
        res,
        routes,
        assets,
        document: Html,
        customRenderer,
        store
      });

      res.send(html);
    } catch (error) {
      console.log(error);
      res.json(error);
    }
  });

export default server;
