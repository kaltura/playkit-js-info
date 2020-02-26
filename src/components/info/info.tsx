import {h, Component} from 'preact';
import * as styles from './info.scss';
import {getContribLogger} from '@playkit-js-contrib/common';
import {CloseButton} from '../close-button';

export interface InfoProps {}

interface InfoState {
  open: boolean;
}

const logger = getContribLogger({
  class: 'Info',
  module: 'info-plugin',
});

export class Info extends Component<InfoProps, InfoState> {
  state: InfoState = {
    open: false,
  };
  private _log = (msg: string, method: string) => {
    logger.trace(msg, {
      method: method || 'Method not defined',
    });
  };

  componentDidMount(): void {
    this._log('Info plugin mount', 'componentDidMount');
  }

  private _triggerInfo = () => {
    this.setState((state: InfoState) => ({
      open: !state.open,
    }));
  };

  render(props: InfoProps) {
    // const {onClose} = props;
    return (
      <div className={styles.root}>
        <CloseButton onClick={this._triggerInfo} />
      </div>
    );
  }
}
