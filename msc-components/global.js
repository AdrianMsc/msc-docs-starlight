module.exports = function ({ addComponents, theme }) {
  const global = {
    ".component-container": {
      "@apply flex flex-row gap-4 items-center bg-white p-5 w-full rounded overflow-hidden h-fit flex-wrap":
        {},
    },
  };
  addComponents(global);
};
