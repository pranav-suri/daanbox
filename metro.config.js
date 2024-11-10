const { getDefaultConfig } = require("@expo/metro-config");

// copied code from the docs
// eslint-disable-next-line
const defaultConfig = getDefaultConfig(__dirname);

// @ts-expect-error - Copied this code from the docs
defaultConfig.resolver.sourceExts.push("cjs");

module.exports = defaultConfig;
