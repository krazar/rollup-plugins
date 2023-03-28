import { readFileSync } from 'fs';

import { createConfig } from '../../shared/rollup.config.mjs';

export default createConfig({
  external: ['colors/safe'],
  pkg: JSON.parse(readFileSync(new URL('./package.json', import.meta.url), 'utf8'))
});
