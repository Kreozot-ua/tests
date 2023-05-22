const { override } = require('customize-cra');
const { alias, aliasJest, configPaths } = require('react-app-rewire-alias');

const aliasMap = configPaths('./tsconfig.base.json');

module.exports = override(alias(aliasMap));
module.exports.jest = override(aliasJest(aliasMap));
