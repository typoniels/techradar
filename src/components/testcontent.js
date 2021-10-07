import React from "react"
import {graphql, Link} from "gatsby"
const Testcontent = ({contentid}) => {
    const stdLinkClasses = "inline-block bg-gray-200 dark:bg-blue-980 dark:hover:bg-blue-900 text-gray-900 dark:text-gray-50 font-semibold hover:bg-gray-300 p-3 rounded-0 "
    return (
        <React.Fragment>
            {contentid === 1 &&
                <div className={"testing-content main-content"}>
                    <div>
                        <hr/>
                        <h3 className="text-2xl text-blue-950 dark:text-gray-200 font-semibold mb-2">Meine Begeisterung für TYPO3 CMS seit 2013</h3>
                        <p>Als Webentwickler habe ich in den letzten Jahren schon mit einigen Redaktionssystemen, Website-Buildern und Individuallösungen gearbeitet. Mit Fokussierung auf kleine und mittelständische Unternehmen (KMU) sollte für mich als Entwickler auch die Spezialisierung auf ein System folgen.</p>
                        <p>Meine Entscheidung fiel nach umfassenden Tests und auf das Enterprise Content-Management-System TYPO3, da ich mit dem CMS bereits seit 2013 sehr gute Erfahrungen gemacht und bisher alle Arten von Projekten realisieren konnte. TYPO3 ist für mich die perfekte Lösung um sowohl sehr komplexe wie auch flexibel skalierbare Webprojekte umzusetzen.</p>
                        <p>
                            <Link className={stdLinkClasses}
                                  activeClassName=""
                                  partiallyActive={true} to={'https://www.typoniels.de/leistungen/content-management/typo3-cms'}
                                  target={"_blank"}
                                  rel={"noopener noreferrer"}
                                  title={"Meine TYPO3-Leistungen"}>
                                Meine TYPO3-Leistungen <i className="fas fa-link pl-1"></i>
                            </Link>
                        </p>
                    </div>
                    <div>
                        <hr/>
                        <h3 className="text-2xl text-blue-950 dark:text-gray-200 font-semibold mb-2">Noch mehr Informationen</h3>
                        <p>Da es auf dieser Website vornehmlich um meine Person gehen soll, finden Sie weitere Informationen zu meinen Leistungen als Webentwickler auf der TYPONiels-Website. Besuchen Sie mich gerne auch dort.</p>
                        <p>
                            <Link className={stdLinkClasses}
                                  activeClassName="text-gray-50 bg-indigo-900"
                                  partiallyActive={true} to={'https://www.typoniels.de/info'}
                                  target={"_blank"}
                                  rel={"noopener noreferrer"}
                                  title={"TYPONiels Website"}>
                                TYPONiels Website <i className="fas fa-link pl-1"></i>
                            </Link>
                        </p>
                    </div>
                </div>
            }

            {contentid === 3 &&
                <div className={"testing-content main-content"}>
                    <h3 className="text-3xl text-blue-950 dark:text-gray-200 font-semibold mb-2">Bereit gemeinsam coole Projekte zu rocken?</h3>
                    <p>Auf dieser Seite erhalten Sie einen detaillierten Überblick über mein Leistungsspektrum und erfahren, wie ich Projekte umsetze und ob ich der perfekte Partner für ihr Vorhaben bin oder eben nicht.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias <strong>dolorem ducimus eaque enim ex</strong> consequatur dolor exercitationem minus odit officia optio praesentium provident quae quisquam rerum, soluta, veniam? Maiores, qui!</p>
                    <img className={'mb-3'} src={'leistungsprofile-startup-kmu.jpg'} />
                    <h3 className="text-2xl text-blue-950 dark:text-gray-200 font-semibold mb-2">Lösungen für mittelständische Unternehmen</h3>
                    <p>Viele Prozesse und Aufgaben im Unternehmen lassen sich durch Software digital abbilden und automatisieren. Dadurch lassen sich nicht nur viel Geld und Zeit sparen, sondern auch Fehler
                        minimieren und schneller auf aktuelle Trends reagieren. Als Dienstleister habe ich es mir zur Aufgabe gemacht Sie in diesem Prozess von der Beratung bis zur Nachbereitung als verlässlicher Partner zu begleiten.</p>
                    <p><strong>Schwerpunkt meiner Arbeit ist es:</strong></p>
                    <ul>
                        <li>Bottlenecks zu identifizieren und zu eliminieren</li>
                        <li>Komplexität reduzieren und Monulitstrukturen aufbrechen</li>
                        <li>Flexible IT-Architekturen konzipieren und kontinuierlich den Anforderungen anpassen</li>
                        <li></li>
                    </ul>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet aut blanditiis commodi cupiditate dolorem eligendi facere itaque magnam necessitatibus, neque nihil nostrum optio reiciendis rem!</p>
                    <img className={'mb-3'} src={'leistungsprofile-agiler-workflow.jpg'} />
                    <h3 className="text-2xl text-blue-950 dark:text-gray-200 font-semibold mb-2">Flexibel auf Changes reagieren - Mein agiler Workflow</h3>
                    <p>Getreu dem Motto Webentwickler ist nicht gleich Webentwickler m&ouml;chte ich ihnen hier ein Einblick
                        in das Profil meiner Gesch&auml;ftst&auml;tigkeit geben und ihnen aufzeigen ob genau ich der
                        richtige Partner f&uuml;r ihr n&auml;chstes Webprojekt bin.</p>
                    <p><strong>Als Webentwickler habe ich mich darauf spezialisiert Unternehmensprozesse mithilfe von
                        Webl&ouml;sungen zu optimieren und diese zu beschleunigen.</strong></p>
                    <p>Daher ist es meine Mission Unternehmen, Organisationen und Start-ups beim kontinuierlichen Aufbau und
                        Ausbau ihrer Onlineaktivit&auml;ten und in der &Ouml;ffentlichkeitsarbeit zu unterst&uuml;tzen,
                        sowie webbasierte L&ouml;sungen zu implementieren, bzw. selbst zu entwickeln.</p>
                    <p><strong>Full-Service rund um das Content-Management-System TYPO3</strong></p>
                    <p><strong>Mit TYPONiels sind Sie stets gut beraten. Gemeinsam f&uuml;hren wir ihr Projekt zum
                        Erfolg.</strong></p>
                    <p><strong>TYPONiels steht f&uuml;r&nbsp;</strong></p>
                    <ul>
                        <li>Einfache Prozesse</li>
                        <li>Saubere Programmierung</li>
                        <li>Flexible Preisgestaltung</li>
                    </ul>
                </div>
            }


            {contentid === 2 &&
                <div className="testing-content main-content">
                    <h3 className="text-3xl text-blue-950 dark:text-gray-200 font-semibold mb-2">In der Stadt Zuhause, im Herzen Dorfkind</h3>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean
                        massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec
                        quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean
                        massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec
                        quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean
                        massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec
                        quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
                    <img className={'mb-3'} src={'ueber-mich-events.jpg'} />
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean
                        massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec
                        quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
                    <hr/>
                    <img className={'mb-3'} src={'ueber-mich-jump.jpg'} />
                    <h3 className="text-2xl text-blue-950 dark:text-gray-200 font-semibold mb-2">Freizeitgestaltung</h3>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean
                        massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec
                        quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
                    <hr/>
                    <img className={'mb-3'} src={'ueber-mich-natur.jpg'} />
                    <h3 className="text-2xl text-blue-950 dark:text-gray-200 font-semibold mb-2">Die Digitalisierung ist Teil meiner DNA</h3>
                    <p>Wir können die Zeit nicht anhalten, wir können Sie nicht zurückdrehen und Momente erneut erleben.</p>
                    <p><strong>Mein Weg in die Web-Entwicklung</strong></p>
                    <p>Nach meinem Schulabschluss im Jahr 2013 war für mich klar in welche Richtung meine berufliche Zukunft
                        gehen soll, ich wollte etwas kreatives aber auch etwas technisches machen, kurzum ich wurde
                        Mediengestalter mit Fachrichtung digital und print. werde ipsum dolor sit amet, consectetuer
                        adipiscing elit. Aenean commodo ligula eget dolor. Aenean
                        massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec
                        quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
                    <p><strong>Das könnte Sie auch interessieren:</strong><br/><a href={'/blog/die-entstehung-meiner-ersten-website'}>Die Entstehung meiner ersten Website</a></p>
                    <hr/>
                    <img className={'mb-3'} src={'ueber-mich-world.jpg'} />
                    <h3 className="text-2xl text-blue-950 dark:text-gray-200 font-semibold mb-2">Einmal um die Welt und wieder zurück</h3>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean
                        massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec
                        quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
                    <hr/>
                    {/*<img className={'mb-3'} src={'ueber-mich-opensource.jpg'} />*/}
                    <h3 className="text-2xl text-blue-950 dark:text-gray-200 font-semibold mb-2">❤️ für OpenSource</h3>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean
                        massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec
                        quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis
                        enim.</p>
                </div>
            }
        </React.Fragment>
    )
}

export default Testcontent