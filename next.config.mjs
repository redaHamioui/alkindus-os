import { withNx } from '@nrwl/next/plugins/with-nx.mjs';

const config = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath: '/alkindus-os',
  assetPrefix: '/alkindus-os/'
};

export default withNx(config);
