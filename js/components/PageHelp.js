import React from 'react';
import Fadeable from './Fadeable';
import SetTitle from './SetTitle';
import classNames from "classnames";

export default function PageHelp({leaving, onLeave, ...props}) {
    return (
        <Fadeable leaving={leaving} onLeave={onLeave}>
            <SetTitle {...props} title="TYPO3 Entwickler Halle (Saale)"/>
            <div className={classNames('row', 'landing-intro')}>
                <div className={classNames('col-12', 'col-md-8')}>
                    <div className={classNames('p-3', 'bg-white')}>
                        <div className={'col fullpage-headline-col'}>
                            <h1 className={'fullpage-headline'}>Webentwickler.<small>Technologie-Radar</small></h1>
                            <hr/>
                            <div className="textblock-text">
                                <p>Das Technologie-Radar wird aktuell überarbeitet und steht ihnen hier bald in vollständiger Version zur Verfügung. Werfen Sie bis dahin gerne eine Blick in die Inhalte im Bereich Wissensdatenbank.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={classNames('col-12', 'col-md-4')}>
                    <div className={'col'}>
                    </div>
                </div>
            </div>
        </Fadeable>
    );
}
