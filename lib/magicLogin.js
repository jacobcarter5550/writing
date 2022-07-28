import { Magic } from 'magic-sdk';
import { OAuthExtension } from '@magic-ext/oauth';


const magic = new Magic('pk_live_9711D265BE922178', {
    extensions: [new OAuthExtension()],
});

export default async function logOut () {
    await magic.user.logout()
}