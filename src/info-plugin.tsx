import {h} from 'preact';
import {
  ContribPluginManager,
  CorePlugin,
  OnMediaLoad,
  OnMediaUnload,
  OnPluginSetup,
  ContribServices,
  ContribPluginData,
  ContribPluginConfigs,
} from '@playkit-js-contrib/plugin';
import {UpperBarItem} from '@playkit-js-contrib/ui';
import {getContribLogger} from '@playkit-js-contrib/common';
import * as styles from './info-plugin.scss';
import {Info} from './components/info';
import {PluginButton} from './components/plugin-button';

const pluginName = `playkit-js-info`;

const logger = getContribLogger({
  class: 'PlaykitJsInfoPlugin',
  module: 'info-plugin',
});

interface PlaykitJsInfoPluginConfig {}

export class PlaykitJsInfoPlugin
  implements OnMediaLoad, OnMediaUnload, OnPluginSetup, OnMediaUnload {
  private _upperBarItem: UpperBarItem | null = null;

  constructor(
    private _corePlugin: CorePlugin,
    private _contribServices: ContribServices,
    private _configs: ContribPluginConfigs<PlaykitJsInfoPluginConfig>
  ) {}

  onPluginSetup(): void {}

  onMediaLoad(): void {
    this._addPluginIcon();
  }

  onMediaUnload(): void {}

  onPluginDestroy(): void {}

  private _addPluginIcon(): void {
    const {} = this._configs.pluginConfig;
    this._upperBarItem = this._contribServices.upperBarManager.add({
      label: 'Info',
      onClick: () => {},
      renderItem: () => <PluginButton />,
    });
  }
}

ContribPluginManager.registerPlugin(
  pluginName,
  (data: ContribPluginData<PlaykitJsInfoPluginConfig>) => {
    return new PlaykitJsInfoPlugin(
      data.corePlugin,
      data.contribServices,
      data.configs
    );
  },
  {
    defaultConfig: {},
  }
);
