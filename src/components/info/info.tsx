import {h, Component} from 'preact';
import * as styles from './info.scss';
import {getContribLogger} from '@playkit-js-contrib/common';
import {CloseButton} from '../close-button';

export interface InfoProps {
  onClick: () => void;
  entryName: string;
  description: string;
  broadcastedDate: string;
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
    const {onClick, entryName, description, broadcastedDate} = props;
    return (
      <div className={styles.root}>
        <CloseButton onClick={onClick} />
        {broadcastedDate && (
          <div className={styles.broadcastedDate}>{broadcastedDate}</div>
        )}
        <div className={styles.entryName}>{entryName}</div>
        <div className={styles.entryDescription}>{description}</div>
      </div>
    );
  }
}
