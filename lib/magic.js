import { Magic } from 'magic-sdk';
import { OAuthExtension } from '@magic-ext/oauth';

const createMagic = (key) => {
  return (
    typeof window != 'undefined' &&
    new Magic(key, {
      extensions: [new OAuthExtension()],
    })
  );
};

const customNodeOptions = {
  rpcUrl: 'https://rpc-mainnet.maticvigil.com/',
  chainId: 137,
};

export const magic = createMagic("pk_live_9711D265BE922178",{
  network: customNodeOptions
});
