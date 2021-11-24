import {h} from 'preact';
import {
  ContribPluginManager,
  CorePlugin,
  OnMediaLoad,
  OnMediaUnload,
  ContribServices,
  ContribPluginData,
  ContribPluginConfigs,
} from '@playkit-js-contrib/plugin';
import {UpperBarItem, OverlayItem, OverlayPositions, timeSince} from '@playkit-js-contrib/ui';
import {getContribLogger, ObjectUtils} from '@playkit-js-contrib/common';
import * as styles from './info-plugin.scss';
import {Info} from './components/info';
import {PluginButton} from './components/plugin-button';

const pluginName = `playkit-js-info`;

const logger = getContribLogger({
  class: 'PlaykitJsInfoPlugin',
  module: 'info-plugin',
});

const {get} = ObjectUtils;

interface PlaykitJsInfoPluginConfig {}

export class PlaykitJsInfoPlugin
  implements OnMediaLoad, OnMediaUnload {
  private _upperBarItem: UpperBarItem | null = null;
  private _infoOverlay: OverlayItem | null = null;

  constructor(
    private _corePlugin: CorePlugin,
    private _contribServices: ContribServices,
    private _configs: ContribPluginConfigs<PlaykitJsInfoPluginConfig>
  ) {}

  onMediaLoad(): void {
    logger.trace('Info plugin loaded', {
      method: 'onMediaLoad',
    });
    this._addPluginIcon();
  }

  onMediaUnload(): void {
    if (this._upperBarItem) {
      this._contribServices.upperBarManager.remove(this._upperBarItem);
      this._upperBarItem = null;
    }
    if (this._infoOverlay) {
      this._toggleInfo();
    }
  }

  private _getBroadcastedDate = (): string => {
    if (this._corePlugin.player.isLive()) {
      return 'Live Now';
    }
    const startTime = get(this, '_corePlugin.player._config.sources.metadata.StartTime', null);
    if (startTime === null) {
      return '';
    }
    return timeSince(new Date(Number(startTime) * 1000));
  }

  private _toggleInfo = () => {
    if (this._infoOverlay) {
      this._contribServices.overlayManager.remove(this._infoOverlay);
      this._infoOverlay = null;
      return;
    }
    this._infoOverlay = this._contribServices.overlayManager.add({
      label: "info-overlay",
      position: OverlayPositions.PlayerArea,
      renderContent: () => (
          <Info
              onClick={this._toggleInfo}
              entryName={get(this, '_corePlugin.player.config.sources.metadata.name', '')}
              description={get(this, '_corePlugin.player.config.sources.metadata.description', '')}
              broadcastedDate={this._getBroadcastedDate()}
          />
      )
    });
  }

  private _addPluginIcon(): void {
    this._upperBarItem = this._contribServices.upperBarManager.add({
      label: 'Info',
      onClick: this._toggleInfo,
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
