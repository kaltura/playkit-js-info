import {h, Component, VNode} from 'preact';
import * as styles from './info.scss';
import * as sanitizeHtml from 'sanitize-html';
import {OverlayPortal} from '@playkit-js/common/dist/hoc/overlay-portal';
const {
  components: {PLAYER_SIZE},
  redux: {connect}
} = KalturaPlayer.ui;
const {Overlay} = KalturaPlayer.ui.components;
const {Text, withText} = KalturaPlayer.ui.preacti18n;
// @ts-ignore
const {withKeyboardA11y} = KalturaPlayer.ui.utils;

export interface InfoProps {
  onClick: () => void;
  entryName: string;
  description: string;
  creator: string;
  createdAt: VNode;
  plays: string;
  creatorText?: string;
  playsText?: string;
}
interface ConnectProps {
  playerSize?: string;
}
interface KeyboardA11yProps {
  handleKeyDown?: () => void;
  setIsModal?: (isModel: boolean) => void;
  addAccessibleChild?: (element: HTMLElement, pushToBeginning?: boolean) => void;
}

type MergedProps = InfoProps & ConnectProps & KeyboardA11yProps;

const mapStateToProps = (state: Record<string, any>) => ({
  playerSize: state.shell.playerSize
});

const translates = ({plays, creator}: InfoProps) => {
  return {
    creatorText: <Text id="info.creator" fields={{creator}}>{`By ${creator}`}</Text>,
    playsText: <Text id="info.plays" fields={{plays}}>{`${plays} plays`}</Text>
  };
};

@connect(mapStateToProps)
@withKeyboardA11y
@withText(translates)
export class Info extends Component<MergedProps> {
  private _descriptionDivRed: HTMLDivElement | null = null;
  renderMediaInfo = () => {
    const {creator, createdAt, plays, creatorText, playsText} = this.props;

    const creatorObj: any = creator ? {value: creatorText!, dataTestId: 'creator', title: creatorText} : null;
    const playsObj: any = plays ? {value: playsText!, dataTestId: 'plays', title: playsText} : null;
    const createdAtObj: any = createdAt ? {value: createdAt, dataTestId: 'createdAt', title: createdAt.props.children as string} : null;

    const mediaInfo: any[] = [creatorObj, playsObj, createdAtObj];
    if (!mediaInfo.some(v => v)) {
      return null;
    }
    return (
      <div className={styles.mediaInfo} data-testid="mediaInfo">
        {mediaInfo.map((val, index) => {
          if (!val) {
            return null;
          }
          return (
            <div key={index} className={styles.mediaInfoBlock} data-testid={val.dataTestId} title={val.title}>
              {val.value}
            </div>
          );
        })}
      </div>
    );
  };

  componentDidMount(): void {
    this.props.setIsModal && this.props.setIsModal(true);
    this._addElementsToAccessibleList();
  }

  private _addElementsToAccessibleList(): void {
    if (this._descriptionDivRed) {
      const linkElements = Array.from(this._descriptionDivRed.querySelectorAll('a')).reverse();
      linkElements.forEach(element => {
        if (element.hasAttribute('href')) {
          this.props.addAccessibleChild && this.props.addAccessibleChild(element! as HTMLElement, true);
        }
      });
    }
  }

  render(props: MergedProps) {
    const {onClick, entryName, description, playerSize = '',handleKeyDown, addAccessibleChild} = props;
    if (playerSize === PLAYER_SIZE.TINY) {
      return null;
    }
    return (
      <OverlayPortal>
        <Overlay open onClose={onClick} addAccessibleChild={addAccessibleChild} handleKeyDown={handleKeyDown}>
          <div className={[styles.infoRoot, styles[playerSize]].join(' ')} data-testid="infoRoot">
            <div className={styles.entryName} data-testid="entryName">
              <h2>{entryName}</h2>
            </div>
            {this.renderMediaInfo()}
            {description && (
              <div
                data-testid="entryDescription"
                className={styles.entryDescription}
                dangerouslySetInnerHTML={{__html: sanitizeHtml(description)}}
                ref={node => (this._descriptionDivRed = node)}
              />
            )}
          </div>
        </Overlay>
      </OverlayPortal>
    );
  }
}
