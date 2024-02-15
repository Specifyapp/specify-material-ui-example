/**
 * @typedef {typeof colorPaths} ColorPaths - All the valid paths for the tokens of type color.
 * To use this type you can do: `@type {import('path/to/myTokensFile').ColorPaths}`
 */
export const colorPaths = /** @type {const} */ [
  "primitive.color.black",
  "primitive.color.blue.0",
  "primitive.color.blue.1",
  "primitive.color.blue.2",
  "primitive.color.blue.3",
  "primitive.color.blue.4",
  "primitive.color.blue.5",
  "primitive.color.blue.6",
  "primitive.color.blue.7",
  "primitive.color.blue.8",
  "primitive.color.blue.9",
  "primitive.color.gray.0",
  "primitive.color.gray.1",
  "primitive.color.gray.2",
  "primitive.color.gray.3",
  "primitive.color.gray.4",
  "primitive.color.gray.5",
  "primitive.color.gray.6",
  "primitive.color.gray.7",
  "primitive.color.gray.8",
  "primitive.color.gray.9",
  "primitive.color.green.0",
  "primitive.color.green.1",
  "primitive.color.green.2",
  "primitive.color.green.3",
  "primitive.color.green.4",
  "primitive.color.green.5",
  "primitive.color.green.6",
  "primitive.color.green.7",
  "primitive.color.green.8",
  "primitive.color.green.9",
  "primitive.color.orange.0",
  "primitive.color.orange.1",
  "primitive.color.orange.2",
  "primitive.color.orange.3",
  "primitive.color.orange.4",
  "primitive.color.orange.5",
  "primitive.color.orange.6",
  "primitive.color.orange.7",
  "primitive.color.orange.8",
  "primitive.color.orange.9",
  "primitive.color.red.0",
  "primitive.color.red.1",
  "primitive.color.red.2",
  "primitive.color.red.3",
  "primitive.color.red.4",
  "primitive.color.red.5",
  "primitive.color.red.6",
  "primitive.color.red.7",
  "primitive.color.red.8",
  "primitive.color.red.9",
  "primitive.color.white",
  "themedColor.surface.1",
  "themedColor.surface.2",
  "themedColor.surface.3",
  "themedColor.surface.error",
  "themedColor.surface.information",
  "themedColor.surface.success",
  "themedColor.surface.warning",
  "themedColor.text.error.default",
  "themedColor.text.error.hover",
  "themedColor.text.highEmphasis.active",
  "themedColor.text.highEmphasis.default",
  "themedColor.text.highEmphasis.hover",
  "themedColor.text.information.default",
  "themedColor.text.information.hover",
  "themedColor.text.lowEmphasis.default",
  "themedColor.text.mediumEmphasis.default",
  "themedColor.text.mediumEmphasis.hover",
  "themedColor.text.success.default",
  "themedColor.text.success.hover",
  "themedColor.text.warning.default",
  "themedColor.text.warning.hover",
] as const;
export type ColorPaths = typeof colorPaths;

/**
 * @typedef {typeof themedColorPaths} ThemedcolorPaths - All the valid paths for the collection themedColor.
 * To use this type you can do: `@type {import('path/to/myTokensFile').ThemedcolorPaths}`
 */
export const themedColorPaths = /** @type {const} */ [
  "themedColor.surface.1",
  "themedColor.surface.2",
  "themedColor.surface.3",
  "themedColor.surface.error",
  "themedColor.surface.information",
  "themedColor.surface.success",
  "themedColor.surface.warning",
  "themedColor.text.error.default",
  "themedColor.text.error.hover",
  "themedColor.text.highEmphasis.active",
  "themedColor.text.highEmphasis.default",
  "themedColor.text.highEmphasis.hover",
  "themedColor.text.information.default",
  "themedColor.text.information.hover",
  "themedColor.text.lowEmphasis.default",
  "themedColor.text.mediumEmphasis.default",
  "themedColor.text.mediumEmphasis.hover",
  "themedColor.text.success.default",
  "themedColor.text.success.hover",
  "themedColor.text.warning.default",
  "themedColor.text.warning.hover",
] as const;
export type ThemedcolorPaths = typeof themedColorPaths;

/**
 * @typedef {ColorPaths | ThemedcolorPaths} AllPath - All possible paths
 */
export type AllPath = ColorPaths | ThemedcolorPaths;

/**
 * @typedef {typeof pathsByType} PathsByType - All the paths for a given token type. Needed for `getTokensByType`
 */
const pathsByType = /** @type {const} */ {
  color: colorPaths,
} as const;
type PathsByType = typeof pathsByType;

/**
 * @typedef {typeof colorModes[number]} ColorModes - All the valid modes of color.
 * To use this type you can do: `@type {import('path/to/myTokensFile').ColorModes}`
 */
export const colorModes = /** @type {const} */ ["dark", "light"] as const;
export type ColorModes = (typeof colorModes)[number];

/**
 * @typedef {typeof themedColorModes[number]} ThemedcolorModes - All the valid modes of themedColor.
 * To use this type you can do: `@type {import('path/to/myTokensFile').ThemedcolorModes}`
 */
export const themedColorModes = /** @type {const} */ ["light", "dark"] as const;
export type ThemedcolorModes = (typeof themedColorModes)[number];

/**
 * @typedef {ColorModes | ThemedcolorModes} AllMode - All the available modes
 */
export type AllMode = ColorModes | ThemedcolorModes;

/**
 * @typedef {typeof tokens} Tokens - All the tokens.
 * Use `getTokenByMode` to retrieve one.
 */
export const tokens = /** @type {const} */ {
  "primitive.color.black": "#000000",
  "primitive.color.blue.0": "#e7f5ff",
  "primitive.color.blue.1": "#d0ebff",
  "primitive.color.blue.2": "#a5d8ff",
  "primitive.color.blue.3": "#74c0fc",
  "primitive.color.blue.4": "#4dabf7",
  "primitive.color.blue.5": "#339af0",
  "primitive.color.blue.6": "#228be6",
  "primitive.color.blue.7": "#1c7ed6",
  "primitive.color.blue.8": "#1971c2",
  "primitive.color.blue.9": "#1864ab",
  "primitive.color.gray.0": "#f8f9fa",
  "primitive.color.gray.1": "#f1f3f5",
  "primitive.color.gray.2": "#e9ecef",
  "primitive.color.gray.3": "#dee2e6",
  "primitive.color.gray.4": "#ced4da",
  "primitive.color.gray.5": "#adb5bd",
  "primitive.color.gray.6": "#868e96",
  "primitive.color.gray.7": "#495057",
  "primitive.color.gray.8": "#343a40",
  "primitive.color.gray.9": "#212529",
  "primitive.color.green.0": "#ebfbee",
  "primitive.color.green.1": "#d3f9d8",
  "primitive.color.green.2": "#b2f2bb",
  "primitive.color.green.3": "#8ce99a",
  "primitive.color.green.4": "#69db7c",
  "primitive.color.green.5": "#51cf66",
  "primitive.color.green.6": "#40c057",
  "primitive.color.green.7": "#37b24d",
  "primitive.color.green.8": "#2f9e44",
  "primitive.color.green.9": "#2b8a3e",
  "primitive.color.orange.0": "#fff4e6",
  "primitive.color.orange.1": "#ffe8cc",
  "primitive.color.orange.2": "#ffd8a8",
  "primitive.color.orange.3": "#ffc078",
  "primitive.color.orange.4": "#ffa94d",
  "primitive.color.orange.5": "#ff922b",
  "primitive.color.orange.6": "#fd7e14",
  "primitive.color.orange.7": "#f76707",
  "primitive.color.orange.8": "#e8590c",
  "primitive.color.orange.9": "#d9480f",
  "primitive.color.red.0": "#fff5f5",
  "primitive.color.red.1": "#ffe3e3",
  "primitive.color.red.2": "#ffc9c9",
  "primitive.color.red.3": "#ffa8a8",
  "primitive.color.red.4": "#ff8787",
  "primitive.color.red.5": "#ff6b6b",
  "primitive.color.red.6": "#fa5252",
  "primitive.color.red.7": "#f03e3e",
  "primitive.color.red.8": "#e03131",
  "primitive.color.red.9": "#c92a2a",
  "primitive.color.white": "#ffffff",
  "themedColor.surface.1": { dark: "#212529", light: "#f8f9fa" },
  "themedColor.surface.2": { dark: "#343a40", light: "#f1f3f5" },
  "themedColor.surface.3": { dark: "#495057", light: "#e9ecef" },
  "themedColor.surface.error": { dark: "#f03e3e", light: "#ff8787" },
  "themedColor.surface.information": { dark: "#1c7ed6", light: "#4dabf7" },
  "themedColor.surface.success": { dark: "#37b24d", light: "#69db7c" },
  "themedColor.surface.warning": { dark: "#f76707", light: "#ffa94d" },
  "themedColor.text.error.default": { dark: "#fa5252", light: "#f03e3e" },
  "themedColor.text.error.hover": { dark: "#ff6b6b", light: "#fa5252" },
  "themedColor.text.highEmphasis.active": { dark: "#e9ecef", light: "#495057" },
  "themedColor.text.highEmphasis.default": {
    dark: "#f8f9fa",
    light: "#212529",
  },
  "themedColor.text.highEmphasis.hover": { dark: "#f1f3f5", light: "#343a40" },
  "themedColor.text.information.default": { dark: "#228be6", light: "#1c7ed6" },
  "themedColor.text.information.hover": { dark: "#339af0", light: "#228be6" },
  "themedColor.text.lowEmphasis.default": { dark: "#ced4da", light: "#868e96" },
  "themedColor.text.mediumEmphasis.default": {
    dark: "#dee2e6",
    light: "#495057",
  },
  "themedColor.text.mediumEmphasis.hover": {
    dark: "#e9ecef",
    light: "#343a40",
  },
  "themedColor.text.success.default": { dark: "#40c057", light: "#37b24d" },
  "themedColor.text.success.hover": { dark: "#51cf66", light: "#40c057" },
  "themedColor.text.warning.default": { dark: "#fd7e14", light: "#f76707" },
  "themedColor.text.warning.hover": { dark: "#ff922b", light: "#fd7e14" },
} as const;
type Tokens = typeof tokens;

/**
* Retrieve any token for a given mode. If available, the default mode will be: 'default'
* @template {AllPath} Path - A generic extending all the possible paths
* @template {Tokens[Path] extends Record<string, any>
    ? keyof Tokens[Path]
    : undefined} Mode - A generic representing all the valid modes for a given path
* @template {Tokens[Path] extends Record<string, any>
    ? Tokens[Path][Mode extends undefined ? never : Mode]
    : Tokens[Path]} Return - The return type
* @param {Path} path - The path to the token
* @param {Mode} mode - The mode of the token you want to retrieve
* @returns {Return} - The value of a token for a given mode
*/
export function getTokenByMode<
  Path extends keyof Tokens,
  Mode extends Tokens[Path] extends Record<string, any>
    ? keyof Tokens[Path]
    : undefined,
  Return extends Tokens[Path] extends Record<string, any>
    ? Tokens[Path][Mode extends undefined ? never : Mode]
    : Tokens[Path],
>(path: Path, mode: Mode): Return {
  if (!tokens[path]) {
    throw new Error(
      "Path: '" +
        path +
        "' doesn't exist. Here are all the valid paths:\n- " +
        Object.keys(tokens).join("\n- "),
    );
  }

  if (typeof tokens[path] !== "object") {
    return tokens[path] as Return;
  }

  if (!mode)
    throw new Error(
      "Mode is undefined but it should be one of " +
        Object.keys(tokens[path]).join(", ") +
        " for path: " +
        path,
    );

  if (!tokens[path][mode]) {
    throw new Error(
      "Invalid mode '" +
        mode.toString() +
        " at path '" +
        path +
        "', here are all the valid modes:\n- " +
        Object.keys(tokens[path]).join("\n- "),
    );
  }

  return tokens[path][mode] as Return;
}

/**
 * Retrieve all the tokens for a specific type (color, dimension, etc...).
 * Note that the value will either be a string or an object if the token has modes
 * @template {keyof PathsByType} Type - A generic extending all the possible types
 * @template {Tokens[PathsByType[Type][number]]} Token - A generic representing a union of all the outputs
 * @param {Type} type - The path to the token
 * @returns {Array<Token>} - An array with all the values
 */
export function getTokensByType<
  Type extends keyof PathsByType,
  Token extends Tokens[PathsByType[Type][number]],
>(type: Type): Array<Token> {
  if (!pathsByType[type]) {
    throw new Error("The type: '" + type + "' does not exist");
  }

  return pathsByType[type].map((path) => tokens[path]) as Array<Token>;
}
