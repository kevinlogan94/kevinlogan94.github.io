module.exports = {
  root: true,

  env: {
    es2021: true,
  },

  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
  },

  // parserOptions: {
  //   parser: "@typescript-eslint/parser",
  // },

  extends: ["plugin:vue/essential", "@vue/prettier", "@vue/typescript"],
};
