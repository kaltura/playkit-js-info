import {h} from 'preact';
import {icons} from '../icons';
import {ui} from '@playkit-js/kaltura-player-js';
import {A11yWrapper, OnClick} from '@playkit-js/common/dist/hoc/a11y-wrapper';

const {Tooltip, Icon} = KalturaPlayer.ui.components;

interface PluginButtonProps {
  onClick: OnClick;
  label?: string;
}

export const PluginButton = ({onClick, label}: PluginButtonProps) => {
  return (
    <Tooltip label={label} type="bottom">
      <A11yWrapper onClick={onClick}>
        <button aria-label={label} className={ui.style.upperBarIcon} data-testid="infoPluginButton">
          <Icon
            id="info-plugin-button"
            height={icons.BigSize}
            width={icons.BigSize}
            viewBox={`0 0 ${icons.BigSize} ${icons.BigSize}`}
            path={icons.PLUGIN_ICON}
          />
        </button>
      </A11yWrapper>
    </Tooltip>
  );
};
