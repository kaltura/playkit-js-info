import {h} from 'preact';
import {getContribLogger} from '@playkit-js-contrib/common';
import {Info} from './components/info';
import {PluginButton} from './components/plugin-button';


const reservedPresetNames = {
  Playback: 'Playback',
  Live: 'Live',
  Idle: 'Idle',
  Ads: 'Ads',
  Error: 'Error',
}

const reservedPresetAreas = {
  PresetFloating: 'PresetFloating',
  BottomBarLeftControls: 'BottomBarLeftControls',
  BottomBarRightControls: 'BottomBarRightControls',
  TopBarLeftControls: 'TopBarLeftControls',
  TopBarRightControls: 'TopBarRightControls',
  SidePanelTop: 'SidePanelTop',
  SidePanelLeft: 'SidePanelLeft',
  SidePanelRight: 'SidePanelRight',
  SidePanelBottom: 'SidePanelBottom',
  PresetArea: 'PresetArea',
  InteractiveArea: 'InteractiveArea',
  PlayerArea: 'PlayerArea',
  VideoArea: 'VideoArea',
};

const timeSince = (date: any) => {
  if (typeof date !== 'object') {
    date = new Date(date);
  }
  const currentDate: any = new Date();
  const seconds = Math.floor((currentDate - date) / 1000);
  let intervalType;
  let interval = Math.floor(seconds / 31536000);
  if (interval >= 1) {
    intervalType = 'year';
  } else {
    interval = Math.floor(seconds / 2592000);
    if (interval >= 1) {
      intervalType = 'month';
    } else {
      interval = Math.floor(seconds / 86400);
      if (interval >= 1) {
        intervalType = 'day';
      } else {
        interval = Math.floor(seconds / 3600);
        if (interval >= 1) {
          intervalType = 'hour';
        } else {
          interval = Math.floor(seconds / 60);
          if (interval >= 1) {
            intervalType = 'minute';
          } else {
            interval = -1;
            intervalType = 'a moment';
          }
        }
      }
    }
  }

  return intervalType;
}

const logger = getContribLogger({
  class: 'PlaykitJsInfoPlugin',
  module: 'info-plugin',
});

export class PlaykitJsInfoPlugin extends KalturaPlayer.core.BasePlugin {
  private _infoOverlay = null;
  private _wasPlayed = false; // keep state of the player so we can resume if needed
  private _removeActiveOverlay: null | Function = null;

  constructor(
    name: string,
    private _player: any,
  ) {
    super(name, _player);
    console.log(_player)
  }

  loadMedia(): void {
    logger.trace('Info plugin loaded', {
      method: 'loadMedia',
    });
    this._addPluginIcon();
  }

  private _getBroadcastedDate = (): string => {
    if (this._player.isLive()) {
      return 'Live Now';
    }
    const startTime = this._player?.sources?.metadata?.StartTime || null;
    if (startTime === null) {
      return '';
    }
    return timeSince(new Date(Number(startTime) * 1000));
  }

  private _toggleInfo = () => {
    if (this._removeActiveOverlay !== null) {
      this._removeOverlay();

      if (this._wasPlayed) {
        this._player.play();
        this._wasPlayed = false;
      }

      return;
    }

    const _toggleInfo = this._toggleInfo;

    if (this._infoOverlay) {
      this._infoOverlay = null;
      return;
    }

    this._setOverlay(
      this._player.ui.addComponent({
        label: 'info-overlay',
        area: reservedPresetAreas.PlayerArea,
        presets: [reservedPresetNames.Playback, reservedPresetNames.Live],
        get: () => (
          <Info
              onClick={_toggleInfo}
              entryName={this._player.sources.metadata.name || ''}
              description={this._player.sources.metadata.description || ''}
              broadcastedDate={this._getBroadcastedDate()}
          />)
        }),
    );
  }

    
  static isValid(): boolean {
    return true;
  }

  reset(): void {
    return;
  }

  destroy(): void {
    this._removeOverlay();
  }

  private _setOverlay = (fn: Function) => {
    this._removeOverlay();
    this._removeActiveOverlay = fn;
  };

  private _removeOverlay = () => {
    if (this._removeActiveOverlay) {
      this._removeActiveOverlay();
      this._removeActiveOverlay = null;
    }
  };

  private _addPluginIcon(): void {
    const _toggleInfo = this._toggleInfo;
    console.log(2)
    this._player.ui.addComponent({
      label: 'Info',
      presets: [reservedPresetNames.Playback, reservedPresetNames.Live],
      area: reservedPresetAreas.TopBarRightControls,
      get: () => <PluginButton toggleInfo={_toggleInfo}/>
    });
  }
}
