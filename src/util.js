"use strict";

import * as colors from "https://raw.githubusercontent.com/denoland/deno/std/0.79.0/std/fmt/colors.ts";

export function crossPlatformPathConversion(filePath) {
	if (Deno.build.os === "win") {
		filePath = filePath.split("/").join("\\");
		filePath = filePath.substr(1, filePath.length - 1);
	}

	return filePath
}

export function printProgressBar(currentProgressNumber, endNumber) {
    if (currentProgressNumber === 0) {
        console.log(` [${colors.green("=")}${" ".repeat(75)}]`);
    } else if (currentProgressNumber >= endNumber) {
        console.log(` [${colors.green("=".repeat(76))}]`);
    } else {
        let fraction = Math.round((currentProgressNumber / endNumber) * 76);
        console.log(` [${colors.green("=".repeat(fraction))}${" ".repeat(76 - fraction)}]`);
    }
}
