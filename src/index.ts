import {PlaykitJsInfoPlugin} from './info-plugin';

declare const __VERSION__: string;
declare const __NAME__: string;

const VERSION = __VERSION__;
const NAME = __NAME__;

export {PlaykitJsInfoPlugin as Plugin};
export {VERSION, NAME};

const pluginName: string = 'playkit-js-info';
KalturaPlayer.core.registerPlugin(pluginName, PlaykitJsInfoPlugin);
