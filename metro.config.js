const { getDefaultConfig } = require("@expo/metro-config");
const { config } = require("dotenv");

// Load environment variables from .env
config();
const defaultConfig = getDefaultConfig(__dirname);
defaultConfig.resolver.sourceExts.push("cjs");
module.exports = defaultConfig;
