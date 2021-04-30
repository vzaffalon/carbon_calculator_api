"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Required External Modules
 */
const dotenv = __importStar(require("dotenv"));
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const router_1 = require("./src/routes/router");
const error_middleware_1 = require("./src/middleware/error.middleware");
const not_found_middleware_1 = require("./src/middleware/not-found.middleware");
dotenv.config();
/**
 * App Variables
 */
if (!process.env.PORT) {
    process.exit(1);
}
const PORT = parseInt(process.env.PORT, 10);
const app = express_1.default();
const startServer = (app) => {
    /**
   *  App Configuration
   */
    app.use(helmet_1.default());
    app.use(cors_1.default());
    app.use(express_1.default.json());
    app.use("/api/", router_1.router);
    app.use(error_middleware_1.errorHandler);
    app.use(not_found_middleware_1.notFoundHandler);
    /**
     * Server Activation
     */
    app.listen(PORT, () => {
        console.log(`Listening on port ${PORT}`);
    });
};
startServer(app);
exports.default = startServer;
