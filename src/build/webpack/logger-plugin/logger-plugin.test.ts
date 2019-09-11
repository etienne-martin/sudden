import webpack from "webpack";

import { LoggerPlugin } from "./logger-plugin";
import { fs, logger, rmRf } from "../../../utils";

test("should log webpack events to the console", async done => {
  const consoleLogSpy = jest.spyOn(console, "log").mockImplementation();
  const consoleInfoSpy = jest.spyOn(console, "info").mockImplementation();
  const consoleWarnSpy = jest.spyOn(console, "warn").mockImplementation();
  const consoleErrorSpy = jest.spyOn(console, "error").mockImplementation();
  const outputPath = `/private/tmp/logger-plugin`;
  const entryFilePath = `${outputPath}/entry.js`;

  await rmRf(outputPath);
  await fs.mkdir(outputPath);
  await fs.writeFile(entryFilePath, "export default 1;");

  const compiler = webpack({
    mode: "production",
    entry: entryFilePath,
    output: {
      path: outputPath
    },
    resolve: {
      extensions: [".js"]
    },
    plugins: [
      new LoggerPlugin({
        logger: logger
      })
    ]
  });

  compiler.run(async () => {
    expect(consoleLogSpy.mock.calls).toMatchSnapshot();
    expect(consoleInfoSpy.mock.calls).toMatchSnapshot();
    expect(consoleWarnSpy.mock.calls).toMatchSnapshot();
    expect(consoleErrorSpy.mock.calls).toMatchSnapshot();

    consoleLogSpy.mockRestore();
    consoleInfoSpy.mockRestore();
    consoleWarnSpy.mockRestore();
    consoleErrorSpy.mockRestore();

    done();
  });
});

test("should log errors to the console", async done => {
  const consoleLogSpy = jest.spyOn(console, "log").mockImplementation();
  const consoleInfoSpy = jest.spyOn(console, "info").mockImplementation();
  const consoleWarnSpy = jest.spyOn(console, "warn").mockImplementation();
  const consoleErrorSpy = jest.spyOn(console, "error").mockImplementation();
  const outputPath = `/private/tmp/logger-plugin`;
  const entryFilePath = `${outputPath}/entry.js`;

  await rmRf(outputPath);
  await fs.mkdir(outputPath);
  await fs.writeFile(entryFilePath, "import test from 'awdawd';");

  const compiler = webpack({
    mode: "development",
    entry: entryFilePath,
    output: {
      path: outputPath
    },
    resolve: {
      extensions: [".js"]
    },
    module: {
      rules: [
        {
          test: /\.(js)$/,
          use: [
            {
              loader: "babel-loader"
            }
          ]
        }
      ]
    },
    plugins: [
      new LoggerPlugin({
        logger: logger
      })
    ]
  });

  compiler.run(async () => {
    expect(consoleLogSpy.mock.calls).toMatchSnapshot();
    expect(consoleInfoSpy.mock.calls).toMatchSnapshot();
    expect(consoleWarnSpy.mock.calls).toMatchSnapshot();
    expect(consoleErrorSpy.mock.calls).toMatchSnapshot();

    consoleLogSpy.mockRestore();
    consoleInfoSpy.mockRestore();
    consoleWarnSpy.mockRestore();
    consoleErrorSpy.mockRestore();

    done();
  });
});

test("should log errors to the console", async done => {
  const consoleLogSpy = jest.spyOn(console, "log").mockImplementation();
  const consoleInfoSpy = jest.spyOn(console, "info").mockImplementation();
  const consoleWarnSpy = jest.spyOn(console, "warn").mockImplementation();
  const consoleErrorSpy = jest.spyOn(console, "error").mockImplementation();
  const outputPath = `/private/tmp/logger-plugin`;
  const entryFilePath = `${outputPath}/entry.js`;

  await rmRf(outputPath);
  await fs.mkdir(outputPath);
  await fs.writeFile(entryFilePath, "import test from 'awdawd';");

  const compiler = webpack({
    mode: "production",
    entry: entryFilePath,
    output: {
      path: outputPath
    },
    resolve: {
      extensions: [".js"]
    },
    module: {
      rules: [
        {
          test: /\.(js)$/,
          use: [
            {
              loader: "babel-loader"
            }
          ]
        }
      ]
    },
    plugins: [
      new LoggerPlugin({
        logger: logger
      })
    ]
  });

  compiler.run(async () => {
    expect(consoleLogSpy.mock.calls).toMatchSnapshot();
    expect(consoleInfoSpy.mock.calls).toMatchSnapshot();
    expect(consoleWarnSpy.mock.calls).toMatchSnapshot();
    expect(consoleErrorSpy.mock.calls).toMatchSnapshot();

    consoleLogSpy.mockRestore();
    consoleInfoSpy.mockRestore();
    consoleWarnSpy.mockRestore();
    consoleErrorSpy.mockRestore();

    done();
  });
});

test("should log file changes", async done => {
  const consoleLogSpy = jest.spyOn(console, "log").mockImplementation();
  const consoleInfoSpy = jest.spyOn(console, "info").mockImplementation();
  const consoleWarnSpy = jest.spyOn(console, "warn").mockImplementation();
  const consoleErrorSpy = jest.spyOn(console, "error").mockImplementation();
  const outputPath = `/private/tmp/logger-plugin`;
  const entryFilePath = `${outputPath}/entry.js`;

  await rmRf(outputPath);
  await fs.mkdir(outputPath);
  await fs.writeFile(entryFilePath, "export default 1;");

  const compiler = webpack({
    mode: "development",
    entry: entryFilePath,
    output: {
      path: outputPath
    },
    resolve: {
      extensions: [".js"]
    },
    plugins: [
      new LoggerPlugin({
        logger: logger
      })
    ]
  });

  let i = 0;

  const watcher = compiler.watch(
    {
      aggregateTimeout: 250,
      poll: undefined
    },
    async () => {
      i++;

      if (i === 1) {
        // Trigger file change
        await fs.writeFile(entryFilePath, "export default 2;");
      }

      if (i === 2) {
        watcher.close(() => {
          expect(consoleLogSpy.mock.calls).toMatchSnapshot();
          expect(consoleInfoSpy.mock.calls).toMatchSnapshot();
          expect(consoleWarnSpy.mock.calls).toMatchSnapshot();
          expect(consoleErrorSpy.mock.calls).toMatchSnapshot();

          consoleLogSpy.mockRestore();
          consoleInfoSpy.mockRestore();
          consoleWarnSpy.mockRestore();
          consoleErrorSpy.mockRestore();

          done();
        });
      }
    }
  );
});

test("should log warnings to the console", async done => {
  const consoleLogSpy = jest.spyOn(console, "log").mockImplementation();
  const consoleInfoSpy = jest.spyOn(console, "info").mockImplementation();
  const consoleWarnSpy = jest.spyOn(console, "warn").mockImplementation();
  const consoleErrorSpy = jest.spyOn(console, "error").mockImplementation();
  const outputPath = `/private/tmp/logger-plugin`;
  const entryFilePath = `${outputPath}/entry.js`;

  await rmRf(outputPath);
  await fs.mkdir(outputPath);
  await fs.writeFile(entryFilePath, "export default  1;");

  const compiler = webpack({
    mode: "production",
    entry: entryFilePath,
    output: {
      path: outputPath
    },
    resolve: {
      extensions: [".js"]
    },
    module: {
      rules: [
        {
          test: /\.(js)$/,
          use: [
            {
              loader: "babel-loader"
            },
            {
              loader: "eslint-loader",
              options: {
                emitWarning: true,
                emitError: false,
                configFile: ".eslintrc.js"
              }
            }
          ]
        }
      ]
    },
    plugins: [
      new LoggerPlugin({
        logger: logger
      })
    ]
  });

  compiler.run(async () => {
    expect(consoleLogSpy.mock.calls).toMatchSnapshot();
    expect(consoleInfoSpy.mock.calls).toMatchSnapshot();
    expect(consoleWarnSpy.mock.calls).toMatchSnapshot();
    expect(consoleErrorSpy.mock.calls).toMatchSnapshot();

    consoleLogSpy.mockRestore();
    consoleInfoSpy.mockRestore();
    consoleWarnSpy.mockRestore();
    consoleErrorSpy.mockRestore();

    done();
  });
});
