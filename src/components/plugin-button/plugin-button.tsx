import {h} from 'preact';
import * as styles from './plugin-button.scss';

export const PluginButton = ({toggleInfo}: {toggleInfo:() => void}) => (
  <div className={styles.infoIcon} role="button" tabIndex={1} onClick={() => toggleInfo()}/>
);
