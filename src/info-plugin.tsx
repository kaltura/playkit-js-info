import {h} from 'preact';
import {Info} from './components/info';
import {PluginButton} from './components/plugin-button';
import {timeSince} from './utils';
import {ui} from 'kaltura-player-js';
const {ReservedPresetNames, ReservedPresetAreas} = ui;

export class PlaykitJsInfoPlugin extends KalturaPlayer.core.BasePlugin {
  private _wasPlayed = false; // keep state of the player so we can resume if needed
  private _removeActiveOverlay: null | Function = null;
  private _removePluginIcon: null | Function = null;

  constructor(name: string, private _player: any) {
    super(name, _player);
  }

  loadMedia(): void {
    this.logger.debug('Info plugin loaded', {
      method: 'loadMedia'
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
  };

  private _openInfo = () => {
    if (!this.player.paused) {
      this._player.pause();
      this._wasPlayed = true;
    }
    this._setOverlay(
      this._player.ui.addComponent({
        label: 'info-overlay',
        area: 'GuiArea',
        presets: [ReservedPresetNames.Playback, ReservedPresetNames.Live],
        get: () => (
          <Info
            onClick={this._closeInfo}
            entryName={this._player.sources.metadata.name || ''}
            description={this._player.sources.metadata.description || ''}
            broadcastedDate={this._getBroadcastedDate()}
          />
        )
      })
    );
  };

  private _closeInfo = () => {
    this._removeOverlay();
    if (this._wasPlayed) {
      this._player.play();
      this._wasPlayed = false;
    }
  };

  static isValid(): boolean {
    return true;
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

  private _addPluginIcon = (): void => {
    if (this._removePluginIcon) {
      return;
    }
    this._removePluginIcon = this._player.ui.addComponent({
      label: 'Info',
      presets: [ReservedPresetNames.Playback, ReservedPresetNames.Live],
      area: ReservedPresetAreas.TopBarRightControls,
      get: () => <PluginButton onClick={this._openInfo} label="Video info" />
    });
  };

  reset(): void {
    this._closeInfo();
  }

  destroy(): void {
    this._removeOverlay();
    if (this._removePluginIcon) {
      this._removePluginIcon();
    }
  }
}
