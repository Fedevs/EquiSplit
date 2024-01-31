module.exports = {
  '*.{js,jsx,ts,tsx}': [
    'npm run lint --fix',
    'npm run test',
    // 'prettier --write',
  ],
};
