import { h } from "preact";
import {
  ContribPluginManager,
  CorePlugin,
  OnMediaLoad,
  OnMediaUnload,
  OnPluginSetup,

  ContribServices,
  ContribPluginData,
  ContribPluginConfigs
} from "@playkit-js-contrib/plugin";
import { getContribLogger } from "@playkit-js-contrib/common";
import * as classes from './playkit-js-info-plugin.scss';

const pluginName = `playkit-js-info`;

const logger = getContribLogger({
  class: "PlaykitJsInfoPlugin",
  module: "playkit-js-info-plugin"
});

interface PlaykitJsInfoPluginConfig {
}

export class PlaykitJsInfoPlugin implements OnMediaLoad, OnMediaUnload, OnPluginSetup, OnMediaUnload {

  constructor(
    private _corePlugin: CorePlugin,
    private _contribServices: ContribServices,
    private _configs: ContribPluginConfigs<PlaykitJsInfoPluginConfig>
  ) {
  }

  onPluginSetup(): void {
  }

  onMediaLoad(): void {
  }

  onMediaUnload(): void {
  }

  onPluginDestroy(): void {
  }
}

ContribPluginManager.registerPlugin(
  pluginName,
  (data: ContribPluginData<PlaykitJsInfoPluginConfig>) => {
    return new PlaykitJsInfoPlugin(data.corePlugin, data.contribServices, data.configs);
  },
  {
    defaultConfig: {
    }
  }
);
