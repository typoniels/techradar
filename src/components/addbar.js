import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image";

const Addbar = ({ data }) => {
  return (

      <div className="container-fluid py-4">
          <div className="col-md-12 sidebar-content">
              <div id="contact">
                  <div className="frame frame-default frame-type-textmedia frame-layout-0 bg-white mb-3">
                      <div className="ce-textpic ce-center ce-above d-flex p-3">
                          <div className="ce-gallery mb-0 col-3" data-ce-columns="1" data-ce-images="1">
                              {data.sidebarimage &&
                              <figure className="image">
                                  <img className="image-embed-item img-fluid" src={data.sidebarimage.value.url}
                                       width="730" height="382"/>
                              </figure>
                              }
                          </div>
                          <div>
                              <header className={'my-0 pt-0'}><h2 className={'mb-0'}
                                                                  dangerouslySetInnerHTML={{__html: data.sidbartitle.value}}></h2>
                              </header>
                              {data.sidebartext &&
                              <div className={'ce-bodytext pt-2'}
                                   dangerouslySetInnerHTML={{__html: data.sidebartext.value}}/>
                              }
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  )
}

export default Addbar