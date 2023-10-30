import {h, VNode} from 'preact';
import {Info} from './components/info';
import {PluginButton} from './components/plugin-button';
import {ui} from '@playkit-js/kaltura-player-js';
import {icons} from './components/icons';
import {UpperBarManager} from '@playkit-js/ui-managers';
const {ReservedPresetNames} = ui;
const {Text} = ui.preacti18n;

// @ts-ignore
export class PlaykitJsInfoPlugin extends KalturaPlayer.core.BasePlugin {
  private _wasPlayed = false; // keep state of the player so we can resume if needed
  private _removeActiveOverlay: null | Function = null;
  private _iconId = -1;

  constructor(name: string, private _player: any) {
    super(name, _player);
  }

  get upperBarManager() {
    return this.player.getService('upperBarManager') as UpperBarManager | undefined;
  }

  loadMedia(): void {
    if (!this.upperBarManager) {
      this.logger.warn('upperBarManager service not registered');
      return;
    }
    this._addPluginIcon();
  }

  private _getUpdatedDate = (): VNode => {
    if (this._player.isLive()) {
      return <Text id="info.live">Live now</Text>;
    }
    const updatedAt: any = new Date((this._player.sources.metadata.updatedAt || 0) * 1000);
    const now: any = new Date();
    const millisecondsPerDay = 24 * 60 * 60 * 1000; // Number of milliseconds in a day

    // Calculate the difference in days
    const daysSince = Math.floor((now - updatedAt) / millisecondsPerDay);

    if (daysSince <= 1) {
      return <Text id="info.today">Today</Text>;
    } else if (daysSince <= 30) {
      return (
        <Text
          id="info.daysAgo"
          fields={{
            daysSince
          }}>{`${daysSince} days ago`}</Text>
      );
    } else if (daysSince <= 360) {
      const monthsSince = Math.floor(daysSince / 30);
      return (
        <Text
          id="info.monthsAgo"
          plural={monthsSince}
          fields={{
            monthsSince
          }}>{`${monthsSince} Month${monthsSince > 1 ? 's' : ''} ago`}</Text>
      );
    } else {
      return <Text id="info.yearAgo">More than a year ago</Text>;
    }
  };

  private _getViews = (): string => {
    const views = this._player.sources.metadata.views;
    if (Number.isNaN(views)) {
      return '';
    }
    if (views >= 1e3) {
      return +(views / 1e3).toFixed(0) + 'K';
    }
    return String(views);
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
            creator={this._player.sources.metadata.creatorId || ''}
            updatedAt={this._getUpdatedDate()}
            views={this._getViews()}
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
    if (this._iconId > 0) {
      return;
    }
    this.player.ready().then(() => {
      this._iconId = this.upperBarManager!.add({
        //@ts-ignore
        label: <Text id="info.info">Info</Text>,
        component: () => <PluginButton label="Video info" />,
        svgIcon: {path: icons.PLUGIN_ICON, viewBox: `0 0 ${icons.BigSize} ${icons.BigSize}`},
        onClick: this._openInfo
      }) as number;
    });
  };

  reset(): void {
    this._closeInfo();
  }

  destroy(): void {
    this._removeOverlay();
    if (this._iconId > 0) {
      this.upperBarManager!.remove(this._iconId);
      this._iconId = -1;
    }
  }
}
