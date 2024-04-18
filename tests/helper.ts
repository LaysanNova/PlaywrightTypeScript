// const { test, expect } = require("@playwright/test");

import { Locator } from "@playwright/test";

// // Check element background-color
// checkElementBackgroundColor(locator, color) {
//   const background = await header.evaluate((e) => {
//     return window.getComputedStyle(e).getPropertyValue("background-color");
//   });
//   expect(background).toBe(color);
// }

// // Check element color
// checkElementColor(locator, color) {
//   const background = await header.evaluate((e) => {
//     return window.getComputedStyle(e).getPropertyValue("background-color");
//   });
//   expect(background).toBe(color);
// }

const { test, expect } = require("@playwright/test");

export const getStyle = async (locator: Locator, property: string): Promise<string> => {
  return locator.evaluate( (el, property) => window.getComputedStyle(el)
    .getPropertyValue(property), property );
};

export const rgbToHex = (r, g, b) => '#' + [r, g, b].map(x => {
  const hex = x.toString(16)
  return hex.length === 1 ? '0' + hex : hex
}).join('')



