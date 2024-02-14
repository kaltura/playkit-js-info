import {h, VNode} from 'preact';
import {Info} from './components/info';
import {PluginButton} from './components/plugin-button';
import {ui} from '@playkit-js/kaltura-player-js';
import {icons} from './components/icons';
import {OnClickEvent} from '@playkit-js/common/dist/hoc/a11y-wrapper';
import {UpperBarManager} from '@playkit-js/ui-managers';
import {InfoEvent} from './event';
const {ReservedPresetNames} = ui;
const {Text} = ui.preacti18n;

// @ts-ignore
export class PlaykitJsInfoPlugin extends KalturaPlayer.core.BasePlugin {
  private _wasPlayed = false; // keep state of the player so we can resume if needed
  private _removeActiveOverlay: null | Function = null;
  private _iconId = -1;
  private _pluginButtonRef: HTMLButtonElement | null = null;

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

  private _getCreationDate = (): VNode => {
    if (this._player.isLive()) {
      return <Text id="info.live">Live now</Text>;
    }
    const createdAt: any = new Date((this._player.sources.metadata.createdAt || 0) * 1000);
    const now: any = new Date();
    const millisecondsPerDay = 24 * 60 * 60 * 1000; // Number of milliseconds in a day

    // Calculate the difference in days
    const daysSince = Math.floor((now - createdAt) / millisecondsPerDay);

    if (daysSince <= 1) {
      return <Text id="info.today">Today</Text>;
    }
    if (daysSince <= 30) {
      return (
        <Text
          id="info.daysAgo"
          fields={{
            daysSince
          }}>{`${daysSince} days ago`}</Text>
      );
    }
    if (daysSince <= 360) {
      const monthsSince = Math.floor(daysSince / 30);
      return (
        <Text
          id="info.monthsAgo"
          plural={monthsSince}
          fields={{
            monthsSince
          }}>{`${monthsSince} Month${monthsSince > 1 ? 's' : ''} ago`}</Text>
      );
    }
    return <Text id="info.yearAgo">More than a year ago</Text>;
  };

  private _getPlays = (): string => {
    const plays = this._player.sources.metadata.plays;
    if (!Number.isInteger(plays)) {
      return '';
    }
    if (plays >= 1e3) {
      return +(plays / 1e3).toFixed(0) + 'K';
    }
    return String(plays);
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
            createdAt={this._getCreationDate()}
            plays={this._getPlays()}
          />
        )
      })
    );
    this.dispatchEvent(InfoEvent.INFO_SCREEN_OPEN);
  };

  private _closeInfo = (event?: OnClickEvent, byKeyboard?: boolean) => {
    this._removeOverlay();
    if (this._wasPlayed) {
      this._player.play();
      this._wasPlayed = false;
    }
    if(byKeyboard){
      // TODO: add focusElement to ts-typed
      // @ts-ignore
      KalturaPlayer.ui.utils.focusElement(this._pluginButtonRef, 100)
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

  private _setPluginButtonRef = (ref: HTMLButtonElement | null) => {
    this._pluginButtonRef = ref;
  };

  private _addPluginIcon = (): void => {
    if (this._iconId > 0) {
      return;
    }
    this.player.ready().then(() => {
      this._iconId = this.upperBarManager!.add({
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        ariaLabel: <Text id="info.info">Info</Text>,
        displayName: 'Info',
        order: 80,
        component: () => <PluginButton label="Video info" setRef={this._setPluginButtonRef}/> as any,
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
