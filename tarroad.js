#!/usr/bin/env node

const { spawn } = require("child_process");
const path = require("path");
const chokidar = require("chokidar");
const esbuild = require("esbuild");
const fs = require("fs");

let chalk; // Declare chalk variable

// Dynamically import chalk (since it's an ESM module)
import("chalk").then((module) => {
  chalk = module.default;
  startProcess(); // Start after loading chalk
});

const userScript = process.argv[2] || "app.js";
const scriptPath = path.resolve(process.cwd(), userScript);
const distPath = path.resolve(process.cwd(), ".road");
const outputFile = path.join(distPath, "output.js");

let roadonProcess;

// Ensure dist folder exists
if (!fs.existsSync(distPath)) {
  fs.mkdirSync(distPath, { recursive: true });
}

// Function to build and start the process
const startProcess = async () => {
  if (!chalk) return; // Ensure chalk is loaded

  if (roadonProcess) {
    console.log(chalk.yellow("🛑 Stopping previous process..."));
    roadonProcess.kill("SIGTERM");
    await new Promise((res) => setTimeout(res, 500)); // Ensure process is stopped
  }

  console.log(chalk.blueBright("⚡ Transpiling with esbuild..."));
  try {
    await esbuild.build({
      entryPoints: [scriptPath],
      outfile: outputFile,
      bundle: true,
      platform: "node",
      format: "cjs",
      sourcemap: true,
    });
    console.log(chalk.green("✅ Build successful!"));
  } catch (err) {
    console.error(chalk.red("❌ Build failed:"), chalk.redBright(err.message));
    return;
  }

  console.log(chalk.magenta("🚀 Starting process..."));
  roadonProcess = spawn("node", [outputFile], { stdio: "inherit" });

  roadonProcess.once("exit", (code) => {
    if (code !== 0) console.log(chalk.red(`❌ Process exited with code ${code}`));
    roadonProcess = null;
  });

  roadonProcess.once("error", (err) => {
    console.error(chalk.red(`❌ Failed to start process: ${err.message}`));
  });
};

// Watch for changes and restart
const watcher = chokidar.watch(process.cwd(), {
  ignored: /node_modules|\.git|dist/,
  ignoreInitial: true,
});

watcher.on("change", (file) => {
  console.log(chalk.cyan(`🔄 File changed: ${file}. Restarting...`));
  startProcess();
});

// Ensure clean exit
const cleanExit = () => {
  console.log(chalk.yellow("\n🛑 Stopping watcher and process..."));
  if (roadonProcess) {
    roadonProcess.kill("SIGTERM");
  }
  watcher.close().then(() => process.exit(0));
};

process.on("SIGINT", cleanExit);
process.on("SIGTERM", cleanExit);
