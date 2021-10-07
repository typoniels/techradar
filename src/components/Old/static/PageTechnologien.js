import React from 'react';
import HeroHeadline from './../HeroHeadline';
import QuadrantGrid from './../QuadrantGrid';
import Fadeable from './../Fadeable';
import SetTitle from './../SetTitle';

export default function PageTechnologien({leaving, onLeave, items, navigate, ...props}) {
    return (
        <Fadeable leaving={leaving} onLeave={onLeave}>
            <SetTitle {...props} title="Technologien"/>
            <div className="row mb-3">
                <div className="col-md-7 col-12">
                    <div className="bg-light rounded mb-3">
                        <div className="ce-bodytext p-3">
                            <HeroHeadline>Die gewählten Technologien machen den entscheidenden Unterschied für ihr
                                Projekt</HeroHeadline>
                            <p className={'mainText'}>Bei einem neuen Web-Projekt sollte man sich immer ausreichend Zeit
                                für die Konzeption und Planung nehmen und sich auch mit der Frage nach dem richtigen
                                technischen Unterbau beschäftigen. Eine ungünstig gewählte technische Basis kann im
                                ersten Moment günstiger und schneller umgesetzt erscheinen, in der Zukunft aber für
                                einen
                                deutlich höheren Aufwand und höhere Projektkosten sorgen.</p>
                            <p>Um in meinen eigenen und den Projekten meiner Kunden
                                möglichst Overhead, technische Schulden und legacy Code zu vermeiden, führe ich vor der
                                Realisierung immer eine langfristige Einschätzung der Rentabilität durch.</p>
                            <ul className={'technology-list'}>
                                <li><strong>Notwendigkeit & Skalierbarkeit</strong><br/>Wird die Technologie zur Lösung
                                    des Problems wirklich benötigt oder ist eine im Projekt bereits vorhandenen
                                    Ressource auch geeignet das gewünschte Ziel zu erreichen und ist die Technologie
                                    auch noch in einem größeren Kontext bzw. in einem anderen Szenario problemlos
                                    einsetzbar oder gibt es Limitierungen die beachtet werden müssen?
                                </li>
                                <li><strong>Planbarkeit & Weiterentwicklung</strong><br/>Wer steht eigentlich
                                    genau hinter dem Projekt, wie ist der aktuelle Stand der Entwicklung und mit welchen
                                    Changes ist in Zukunft zu rechnen bzw. ist die Betreuung und Weiterentwicklung für
                                    die nächsten Jahre sichergestellt? Hier prüfe ich sehr genau ob es aktuell sinnvoll
                                    ist auf diese Technologie zu setzen oder doch eine Alternative gefunden werden muss.
                                </li>
                                <li><strong>Sicherheit & Dokumentation</strong><br/>Ein weiterer wichtiger
                                    Entscheidungsgrund ist die allgemeine Sicherheit der Technologie, hier schaue ich
                                    mir an, ob es offensichtliche Sicherheitslücken oder veraltete Abhängigkeiten gibt
                                    und ob die Kernbereiche mit Tests abdeckt sind. Eine ausführliche, aktuelle und
                                    leicht zugängliche Dokumentation ist für mich ebenso ein wichtiges Kriterium.
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="p-3 bg-light mb-3 rounded">
                        <QuadrantGrid items={items}/>
                    </div>
                </div>
                <div className="col-md-5 col-12">
                    <div id="contact" style={{top: "0 !important"}}>
                        <div className="p-4 bg-white rounded">
                            <img className={'img-fluid'} src={'./assets/images/technologien.svg'}/>
                        </div>
                    </div>

                </div>
            </div>
        </Fadeable>
    );
}
