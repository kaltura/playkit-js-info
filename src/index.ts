import {PlaykitJsInfoPlugin} from './info-plugin';

declare var __VERSION__: string;
declare var __NAME__: string;

const VERSION = __VERSION__;
const NAME = __NAME__;

export {PlaykitJsInfoPlugin as Plugin};
export {VERSION, NAME};

export const pluginName: string = 'playkit-js-info';
KalturaPlayer.core.registerPlugin(pluginName, PlaykitJsInfoPlugin);