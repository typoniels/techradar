import React from 'react';
import HeroHeadline from './HeroHeadline';
import HeadlineGroup from './HeadlineGroup';
import QuadrantSection from './QuadrantSection';
import Fadeable from './Fadeable';
import SetTitle from './SetTitle';

import { translate, messageHelper } from '../../common/config';
import { groupByQuadrants } from '../../common/model';

export default function PageQuadrant({ leaving, onLeave, pageName, items, ...props }) {
  const groups = groupByQuadrants(items);
  return (
    <Fadeable leaving={leaving} onLeave={onLeave}>
      <SetTitle {...props} title={translate(pageName)} />
      {/*<HeadlineGroup>*/}
      {/*  <HeroHeadline>{translate(pageName)}</HeroHeadline>*/}
      {/*  <p>{messageHelper(pageName, 'teaser')}</p>*/}
      {/*</HeadlineGroup>*/}

      <QuadrantSection groups={groups} quadrantName={pageName} big />
    </Fadeable>
  );
}
