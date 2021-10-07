import React from 'react';
import { translate, messageHelper, rings } from '../../common/config';
import Badge from './Badge';
import Link from './Link';
import ItemList from './ItemList';
import classNames from "classnames";

const renderList = (ringName, quadrantName, groups, big) => {
  const itemsInRing = groups[quadrantName][ringName];

  if (big === true) {
    return (
      <ItemList items={itemsInRing} noLeadingBorder>
        <Badge type={ringName} big={big}>{ringName}</Badge>
      </ItemList>
    );
  }

  return (
    <div className="ring-list">
      <div className="ring-list__header">
        <Badge type={ringName}>{ringName}</Badge>
      </div>
      {
        itemsInRing.map(item => (
          <span
            key={item.name}
            className="ring-list__item">
            <Link className="link" pageName={`${item.quadrant}/${item.name}`}>{item.title}</Link>
          </span>
        ))
      }
    </div>
  );
};

const renderRing = (ringName, quadrantName, groups, big) => {
  if (!groups[quadrantName] || !groups[quadrantName][ringName] || groups[quadrantName][ringName].length === 0) {
    return null;
  }
  return (
    <div key={ringName} className="quadrant-section__ring">
      {renderList(ringName, quadrantName, groups, big)}
    </div>
  );
};

export default function QuadrantSection({ quadrantName, groups, big = false }) {
  return (
    <div className="quadrant-section">
      <div className="quadrant-section__header">
        <div className="split">
          <div className="split__left">
            <h4 className={classNames('quadrant_headline','font-weight-bold')}>{translate(quadrantName)}<br /><small className={classNames('h5', 'text-dark')}>{messageHelper(quadrantName, 'subtitle')}</small></h4>
          </div>
          {
            !big && (
              <div className="split__right">
                <Link className="icon-link" pageName={`${quadrantName}`}>
                  <span className="icon icon--pie icon-link__icon"></span>Rubrikübersicht
                </Link>
              </div>
            )
          }
        </div>
      <div className={'mb-3 text-danger'} dangerouslySetInnerHTML={{ __html: messageHelper(quadrantName, 'shortteaser') }}></div>
      </div>
      <div className="quadrant-section__rings">
        {
          rings.map((ringName) => renderRing(ringName, quadrantName, groups, big))
        }
      </div>
    </div>
  );
}
