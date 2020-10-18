import React from 'react';
import Fadeable from './../Fadeable';
import SetTitle from './../SetTitle';
import classNames from "classnames";

export default function PageAbout({leaving, onLeave, ...props}) {
    return (
        <Fadeable leaving={leaving} onLeave={onLeave}>
            <SetTitle {...props} title="TYPO3 Entwickler Halle (Saale)"/>
            <div className={classNames('row', 'align-items-center', 'my-0', 'my-lg-5')}>
                <div className={classNames('col-12', 'col-md-7')}>
                    <div className="text-center text-md-left">
                        <h1 className={'fullpage-headline'}>Howdy, ich bin Niels<small>Webentwickler aus Halle</small></h1>
                        <hr/>
                        <div className="textblock-text">
                            <p>Der Beruf des Webentwicklers ist für mich nicht nur ein Job, sondern eine Passion die Probleme meiner Kunden auf intelligente Art und Weise durch fortschrittliche Webanwendungen zu lösen. Dabei nutze ich aktuelle Technologien, Automatisierung und Tools zur Qualitätssicherung. Doch was genau sind meine aktuellen Werkzeuge und wofür setze ich Sie explizit ein?</p>
                            <p><strong>Auf dieser Seite möchte ich Ihnen einen Einblick in meine Werkzeugkiste als Webentwickler geben ...</strong></p>
                        </div>
                        <hr/>
                    </div>
                    <div className={'btn-group-wrapper text-center text-md-left mb-5 mb-md-0'}>
                        <a className={classNames('btn', 'hvr-bob', 'btn-secondary', 'mb-1', 'rounded-0 mr-1')}
                           href={'https://www.typoniels.de/info'} target={'_blank'}><i
                            className={classNames('fas', 'fa-user-tie', 'ad-none', 'd-lg-inline-block')}></i> Corporate
                            Website</a>
                        <a className={classNames('btn', 'hvr-bob', 'btn-secondary', 'mb-1', 'rounded-0 mr-1')}
                           href={'https://foto.typoniels.de/'} target={'_blank'}><i
                            className={classNames('fas', 'fa-camera-retro', 'ad-none', 'd-lg-inline-block')}></i> PhotoNiels</a>
                        <a className={classNames('btn', 'hvr-bob', 'btn-secondary', 'mb-1', 'rounded-0 mr-1')}
                           href={'https://thinkdigital.typoniels.de/'} target={'_blank'}><i
                            className={classNames('fa', 'fa-blog', 'ad-none', 'd-lg-inline-block')}></i> ThinkDigital
                            Blog</a>
                        <a className={classNames('btn', 'hvr-bob', 'btn-secondary', 'mb-1', 'rounded-0 mr-1')}
                           href={'https://www.halle-development.com'} target={'_blank'}><i
                            className={classNames('fab', 'fa-gitlab', 'ad-none', 'd-lg-inline-block')}></i> Gitlab</a>
                        <a className={classNames('btn', 'hvr-bob', 'btn-secondary', 'mb-1', 'rounded-0')}
                           href={'https://bitbucket.org/typoniels'} target={'_blank'}><i
                            className={classNames('fab', 'fa-bitbucket', 'ad-none', 'd-lg-inline-block')}></i> Bitbucket</a>
                    </div>
                </div>
                <div className={classNames('col-12', 'col-md-5')}>
                    <div className="p-4">
                        <img className={'img-fluid'} src={'./assets/images/typo3-entwickler.webp'}/>
                    </div>
                </div>
            </div>
        </Fadeable>
    );
}