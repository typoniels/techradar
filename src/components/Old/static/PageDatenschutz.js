import React from 'react';
import HeroHeadline from './../HeroHeadline';
import Fadeable from './../Fadeable';
import SetTitle from './../SetTitle';

export default function PageDatenschutz({leaving, onLeave, ...props}) {
    return (
        <Fadeable leaving={leaving} onLeave={onLeave}>
            <SetTitle {...props} title="Datenschutz" />
            <div className="row">
                <div className="col-md-8 col-12">
                    <div className="bg-light">
                        <figure className={'image light'}>
                            <img className={'img-fluid'} src={'./assets/images/privacy.png'} />
                        </figure>
                        <div className="ce-bodytext p-3 px-sm-5">
                            <h1 className={'text-dark hero-headline font-weight-bold mb-3'}>Datenschutz</h1>
                            <p><strong>Widerruf Ihrer Einwilligung zur
                            Datenverarbeitung</strong></p><p>Nur mit Ihrer ausdrücklichen Einwilligung sind einige Vorgänge der
                            Datenverarbeitung möglich. Ein Widerruf Ihrer bereits erteilten Einwilligung ist jederzeit möglich.
                            Für den Widerruf genügt eine formlose Mitteilung per E-Mail. Die Rechtmäßigkeit der bis zum Widerruf
                            erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.</p><p><strong>Recht auf Beschwerde bei
                            der zuständigen Aufsichtsbehörde</strong></p><p>Als Betroffener steht Ihnen im Falle eines
                            datenschutzrechtlichen Verstoßes ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.
                            Zuständige Aufsichtsbehörde bezüglich datenschutzrechtlicher Fragen ist der
                            Landesdatenschutzbeauftragte des Bundeslandes, in dem sich der Sitz unseres Unternehmens befindet.
                            Der folgende Link stellt eine Liste der Datenschutzbeauftragten sowie deren Kontaktdaten
                            bereit: <a
                                href="https://www.bfdi.bund.de/DE/Infothek/Anschriften_Links/anschriften_links-node.html"
                                target="_blank"
                                rel="noreferrer">https://www.bfdi.bund.de/DE/Infothek/Anschriften_Links/anschriften_links-node.html</a>.
                        </p><p><strong>Recht auf Datenübertragbarkeit</strong></p><p>Ihnen steht das Recht zu, Daten, die wir
                            auf Grundlage Ihrer Einwilligung oder in Erfüllung eines Vertrags automatisiert verarbeiten, an sich
                            oder an Dritte aushändigen zu lassen. Die Bereitstellung erfolgt in einem maschinenlesbaren Format.
                            Sofern Sie die direkte Übertragung der Daten an einen anderen Verantwortlichen verlangen, erfolgt
                            dies nur, soweit es technisch machbar ist.</p><p><strong>Recht auf Auskunft, Berichtigung, Sperrung,
                            Löschung</strong></p><p>Sie haben jederzeit im Rahmen der geltenden gesetzlichen Bestimmungen das
                            Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, Herkunft der
                            Daten, deren Empfänger und den Zweck der Datenverarbeitung und ggf. ein Recht auf Berichtigung,
                            Sperrung oder Löschung dieser Daten. Diesbezüglich und auch zu weiteren Fragen zum Thema
                            personenbezogene Daten können Sie sich jederzeit über die im Impressum aufgeführten
                            Kontaktmöglichkeiten an uns wenden.</p><p><strong>SSL- bzw. TLS-Verschlüsselung</strong></p><p>Aus
                            Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte, die Sie an uns als
                            Seitenbetreiber senden, nutzt unsere Website eine SSL-bzw. TLS-Verschlüsselung. Damit sind Daten,
                            die Sie über diese Website übermitteln, für Dritte nicht mitlesbar. Sie erkennen eine verschlüsselte
                            Verbindung an der „https://“ Adresszeile Ihres Browsers und am Schloss-Symbol in der
                            Browserzeile.</p><p><strong>Server-Log-Dateien</strong></p><p>In Server-Log-Dateien erhebt und
                            speichert der Provider der Website automatisch Informationen, die Ihr Browser automatisch an uns
                            übermittelt. Dies sind:</p><p></p>
                            <ul>
                                <li>Besuchte Seite auf unserer Domain</li>
                                <li>Datum und Uhrzeit der Serveranfrage</li>
                                <li>Browsertyp und Browserversion</li>
                                <li>Verwendetes Betriebssystem</li>
                                <li>Referrer URL</li>
                                <li>Hostname des zugreifenden Rechners</li>
                                <li>IP-Adresse</li>
                            </ul>
                            <p></p><p>Es findet keine Zusammenführung dieser Daten mit anderen Datenquellen statt. Grundlage der
                                Datenverarbeitung bildet Art. 6 Abs. 1 lit. b DSGVO, der die Verarbeitung von Daten zur
                                Erfüllung eines Vertrags oder vorvertraglicher Maßnahmen gestattet.</p></div>
                    </div>
                </div>
                <div className="col-md-4 col-12"></div>
            </div>
        </Fadeable>
    );
}