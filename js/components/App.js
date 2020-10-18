import React from 'react';
import classNames from 'classnames';
import {connect} from 'react-redux';

import actions from '../actions';
import Header from './Header';
import Footer from './Footer';
import Router from './Router';

function App(props) {
    return (
        <div>
            <div className="typoniels_page">
                <div className="typoniels_page__header-wrapper">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12">
                                <div className="typoniels_page__header">
                                    <Header {...props} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={classNames('typoniels_page__content-wrapper', 'container-fluid', 'py-4', {'is-faded': props.isFaded})}>
                    <div className={classNames('typoniels_page__content')}>
                        <Router {...props} />
                    </div>
                </div>
                <div className={classNames('typoniels_page__footer-wrapper', 'py-0')}>
                    <div className="container-fluid">
                        <Footer {...props} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default connect(
    ({items, releases, pageName, pageState}) => ({items, releases, pageName, pageState}),
    actions
)(App);
