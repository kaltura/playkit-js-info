import {h, Component} from 'preact';
import * as styles from './info.scss';
import {KeyboardKeys} from '@playkit-js-contrib/ui';
import {getContribLogger, ObjectUtils} from '@playkit-js-contrib/common';
const {get} = ObjectUtils;

export interface InfoProps {
  onClick: () => void;
  entryName: string;
  description: string;
  broadcastedDate: string;
}

const logger = getContribLogger({
  class: 'Info',
  module: 'info-plugin',
});

export class Info extends Component<InfoProps> {
  private _closeButtonNode: null | HTMLDivElement = null;

  componentDidMount(): void {
    logger.trace('Info plugin mount', {
      method: 'componentDidMount',
    });
    if (this._closeButtonNode) {
      this._closeButtonNode.focus();
    }
  }

  private _handleClose = (event: MouseEvent | KeyboardEvent) => {
    if (event.type === "keypress" && get(event, 'keyCode', null) !== KeyboardKeys.Enter) {
      return;
    }
    this.props.onClick();
  }

  render(props: InfoProps) {
    const {entryName, description, broadcastedDate} = props;
    return (
      <div className={[styles.root, 'kaltura-info__root'].join(' ')}>
        <div
          className={[styles.closeButton, 'kaltura-info__close-button'].join(' ')}
          role="button"
          tabIndex={1}
          onClick={this._handleClose}
          onKeyPress={this._handleClose}
          ref={(node: HTMLDivElement) => {
            this._closeButtonNode = node;
          }}
        />
        <div
          className={[
            styles.broadcastDate,
            'kaltura-info__broadcast-date',
            broadcastedDate ? '' : 'hidden',
          ].join(' ')}>
          {broadcastedDate}
        </div>
        <div
          className={[styles.entryName, 'kaltura-info__entry-name'].join(' ')}>
          {entryName}
        </div>
        <div
          className={[
            styles.entryDescription,
            'kaltura-info__entry-description',
          ].join(' ')}
          dangerouslySetInnerHTML={{__html: description}}
        />
      </div>
    );
  }
}
