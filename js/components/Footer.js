import React from 'react';
import classNames from 'classnames';
import Branding from './Branding';
import FooterEnd from './FooterEnd';
import { assetUrl, getItemPageNames, isMobileViewport } from '../../common/config';
import Link from "./Link";

export default function Footer({ items, pageName }) {
  return (
    <div className={classNames('row', {'is-hidden': !isMobileViewport() && getItemPageNames(items).includes(pageName)})}>
        <div className="col-12">
            <div className={'footer'}>
                <p className="footnote text-center text-md-left">
                    <strong>© {new Date().getFullYear()} Niels Langlotz</strong> | <Link pageName="impressum" className="footer-link">Impressum</Link> | <Link pageName="datenschutz" className="footer-link">Datenschutz</Link>
                </p>

                {/*
            <Branding modifier="footer" logoContent={<img src={assetUrl('logo.svg')} width="150px" height="60px" />}>
                <p className="footnote">
                    <strong>© {new Date().getFullYear()} Niels Langlotz</strong><br />Mehr Infos unter www.typoniels.de<br />
                    <Link pageName="impressum" className="footer-link">Impressum</Link> | <Link pageName="datenschutz" className="footer-link">Datenschutz</Link>
                </p>
      </Branding>
      <FooterEnd/>
      */}
            </div>
        </div>
    </div>
  );
}
