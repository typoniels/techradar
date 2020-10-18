import React from 'react';
import HeroHeadline from './HeroHeadline';
import QuadrantGrid from './QuadrantGrid';
import Fadeable from './Fadeable';
import SetTitle from './SetTitle';

export default function PageIndex({leaving, onLeave, items, navigate, ...props}) {
    return (
        <Fadeable leaving={leaving} onLeave={onLeave}>
            <SetTitle {...props} title="Dienstleistungen für Digitale Pioniere"/>
            <QuadrantGrid items={items}/>
        </Fadeable>
    );
}
