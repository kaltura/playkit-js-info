import {h} from 'preact';
import {Info} from './components/info';
import {PluginButton} from './components/plugin-button';
import {timeSince} from './utils';
import {ui} from 'kaltura-player-js';
const { ReservedPresetNames, ReservedPresetAreas} = ui;

//@ts-ignore
export class PlaykitJsInfoPlugin extends KalturaPlayer.core.BasePlugin {
  private _infoOverlay = null;
  private _wasPlayed = false; // keep state of the player so we can resume if needed
  private _removeActiveOverlay: null | Function = null;
  private _removePluginIcon: null | Function = null;

  constructor(name: string, private _player: any) {
    super(name, _player);
  }

  loadMedia(): void {
    //@ts-ignore
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

  private _toggleInfo = () => {
    if (this._removeActiveOverlay !== null) {
      this._removeOverlay();

      if (this._wasPlayed) {
        this._player.play();
        this._wasPlayed = false;
      }

      return;
    }

    if (this._infoOverlay) {
      this._infoOverlay = null;
      return;
    }

    this._setOverlay(
      this._player.ui.addComponent({
        label: 'info-overlay',
        area: ReservedPresetAreas.PlayerArea,
        presets: [ReservedPresetNames.Playback, ReservedPresetNames.Live],
        get: () => (
          <Info
            onClick={this._toggleInfo}
            entryName={this._player.sources.metadata.name || ''}
            description={this._player.sources.metadata.description || ''}
            broadcastedDate={this._getBroadcastedDate()}
          />
        )
      })
    );
  };

  static isValid(): boolean {
    return true;
  }

  reset(): void {
    return;
  }

  destroy(): void {
    this._removeOverlay();
    if (this._removePluginIcon) {
      this._removePluginIcon();
    }
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
    if(this._removePluginIcon) return;

    this._removePluginIcon = this._player.ui.addComponent({
      label: 'Info',
      presets: [ReservedPresetNames.Playback, ReservedPresetNames.Live],
      area: ReservedPresetAreas.TopBarLeftControls,
      get: () => <PluginButton onClick={this._toggleInfo} />
    });
  }
}
