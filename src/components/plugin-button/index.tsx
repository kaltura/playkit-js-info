import {h} from 'preact';
import {icons} from '../icons';
import {ui} from '@playkit-js/kaltura-player-js';

const {Tooltip, Icon} = KalturaPlayer.ui.components;
const {Text} = ui.preacti18n;
interface PluginButtonProps {
  label?: string;
}

export const PluginButton = ({label}: PluginButtonProps) => {
    const infoTxt =  <Text id="controls.info">Video info</Text>;
    return (
    <Tooltip label={infoTxt} type="bottom">
        <button aria-label={label} className={ui.style.upperBarIcon} data-testid="infoPluginButton">
          <Icon
            id="info-plugin-button"
            height={icons.BigSize}
            width={icons.BigSize}
            viewBox={`0 0 ${icons.BigSize} ${icons.BigSize}`}
            path={icons.PLUGIN_ICON}
          />
        </button>
    </Tooltip>
    );
};
