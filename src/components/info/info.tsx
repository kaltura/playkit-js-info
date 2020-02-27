import {h, Component} from 'preact';
import * as styles from './info.scss';
import {getContribLogger} from '@playkit-js-contrib/common';
import {CloseButton} from '../close-button';
import {timeSince} from '../../utils';

export interface InfoProps {
  onClick: () => void;
}

interface InfoState {}

const logger = getContribLogger({
  class: 'Info',
  module: 'info-plugin',
});

export class Info extends Component<InfoProps, InfoState> {
  private _log = (msg: string, method: string) => {
    logger.trace(msg, {
      method: method || 'Method not defined',
    });
  };

  componentDidMount(): void {
    this._log('Info plugin mount', 'componentDidMount');
  }

  render(props: InfoProps) {
    const {onClick} = props;
    return (
      <div className={styles.root}>
        <CloseButton onClick={onClick} />
        <div className={styles.creationTime}>{`${timeSince(new Date(Date.now() - 1000))} ago`}</div>
        <div className={styles.entryName}>Name</div>
        <div className={styles.entryDescription}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere inventore quaerat eaque omnis reiciendis quisquam labore aliquam sunt odit. Quis debitis, dolore ea necessitatibus nisi ipsum unde temporibus aperiam explicabo.</div>
      </div>
    );
  }
}
