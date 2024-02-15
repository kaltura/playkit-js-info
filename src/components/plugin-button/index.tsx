import {h} from 'preact';
import {icons} from '../icons';
import {ui} from '@playkit-js/kaltura-player-js';
import { pluginName } from "../../index";

const {Tooltip, Icon} = KalturaPlayer.ui.components;
const {Text} = ui.preacti18n;
interface PluginButtonProps {
  label?: string;
  setRef: (ref: HTMLButtonElement | null) => void;
}

export const PluginButton = ({label, setRef}: PluginButtonProps) => {
    const infoTxt =  <Text id="controls.info">Video info</Text>;
    return (
    <Tooltip label={infoTxt} type="bottom">
        <button type="button" aria-label={label} className={ui.style.upperBarIcon} data-testid="infoPluginButton" ref={setRef}>
          <Icon
            id={pluginName}
            height={icons.BigSize}
            width={icons.BigSize}
            viewBox={`0 0 ${icons.BigSize} ${icons.BigSize}`}
            path={icons.PLUGIN_ICON}
            hidden="true"
          />
        </button>
    </Tooltip>
    );
};
