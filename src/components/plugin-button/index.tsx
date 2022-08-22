import {h} from 'preact';
import * as styles from './plugin-button.scss';
import {icons} from '../icons';
import {A11yWrapper, OnClick} from '../../a11y-wrapper/a11y-wrapper';

const {Tooltip, Icon} = KalturaPlayer.ui.components;

interface PluginButtonProps {
  onClick: OnClick;
  label?: string;
}

export const PluginButton = ({onClick, label}: PluginButtonProps) => {
  return (
    <Tooltip label={label} type="bottom">
      <A11yWrapper onClick={onClick}>
        <button aria-label={label} className={styles.infoPluginButton} tabIndex={0}>
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
