import React from 'react';
import HeroHeadline from './../HeroHeadline';
import Fadeable from './../Fadeable';
import SetTitle from './../SetTitle';
import classNames from "classnames";

export default function PageError ({leaving, onLeave, ...props}) {
    return (
        <Fadeable leaving={leaving} onLeave={onLeave}>
            <SetTitle {...props} title="404 | Seite konnte nicht gefunden werden"/>
            <div className={classNames('row', 'landing-intro')}>
                <div className={classNames('col-12', 'col-md-8')}>
                    <div className={classNames('p-3', 'bg-white')}>
                        <div className={'col fullpage-headline-col'}>
                            <h1>404 | Seite wurde nicht gefunden</h1>
                            <hr/>
                            <div className="textblock-text">
                                <p><strong>Ohh nein, da hat der Admin wohl wieder eine Unterseite verschoben oder gelöscht...</strong><br />Die aufgerufene Seite konnte zumindest nicht gefunden werden.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={classNames('col-12', 'col-md-4')}></div>
            </div>
        </Fadeable>
    );
}
