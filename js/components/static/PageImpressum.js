import React from 'react';
import HeroHeadline from './../HeroHeadline';
import Fadeable from './../Fadeable';
import SetTitle from './../SetTitle';

export default function PageImpressum({leaving, onLeave, ...props}) {
    return (
        <Fadeable leaving={leaving} onLeave={onLeave}>
            <SetTitle {...props} title="Impressum"/>
            <div className="row">
                <div className="col-md-8 col-12">
                    <div className="bg-light">
                        <figure className={'image light'}>
                            <img className={'img-fluid'} src={'./assets/images/privacy.png'} />
                        </figure>
                        <div className="ce-bodytext p-3 px-sm-5">
                            <h1 className={'text-dark hero-headline font-weight-bold mb-3'}>Impressum</h1>
                            <p><strong>typoNiels - Webentwickler
                                Halle
                                (Saale)</strong><br/> Professionelle Internetlösungen aus Halle an der Saale</p>
                            <p>V.i.S.d.P.</p>
                            <p>Niels Langlotz<br/> Web-Entwicklung & TYPO3-Integration</p>
                            <p>Merseburger Straße 323<br/> 06132 Halle (Saale)</p>
                            <p>E-Mail: <a href={'mailto:info@typoniels.de'}>info(at)typoniels.de</a><br/> Web: <a href="https://www.typoniels.de/"
                                                                                   target="_blank">www.typoniels.de</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </Fadeable>
    );
}