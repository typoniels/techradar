import React from "react"
import {Link} from "gatsby"
const ContentHelper = ({component}) => {
    return (
        <React.Fragment>
            {component.component === 'divider' &&
                <div className={'typoniels-divider'}><hr/></div>
            }
            {component.component === 'image' &&
            <div className={'typoniels-image'}>
                {console.log(component)}
            </div>
            }
            {component.component === 'gallery' &&
                <div className={'typoniels-gallery'}>
                    {component.settings.gallery.map((item) => {
                        return (
                            <div className="typoniels-component">
                                {/* TODO: Implement Galler Masonary with Image Processing */}
                                {/*<img src={'https://cockpit.typoniels.de/'+ item.path} />*/}
                            </div>
                        )
                    })}
                </div>
            }
            {component.component === 'button' &&
            <div className={'typoniels-button'}>
                <Link className={'' + component.settings.className ?? component.settings.className} to={component.settings.url}>
                    {component.settings.text}
                </Link>
                {console.log(component)}
            </div>
            }
            {component.component === 'html' &&
                <div dangerouslySetInnerHTML={{__html: component.settings.html}} />
            }
        </React.Fragment>
    )
}
export default ContentHelper