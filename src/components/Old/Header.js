import React from 'react';
import classNames from 'classnames';
import { connect } from 'react-redux';

import Branding from './Branding';
import Link from './Link';
import LogoLink from './LogoLink';
import Search from './Search';
import { getItemPageNames } from '../../common/config';
import actions from '../actions';

class Header extends React.Component {
  constructor(...args) {
    super(...args);
    this.state = {
      searchOpen: false,
      search: '',
    };
  }
  openSearch = () => {
    this.setState({
      searchOpen: true,
    });
  };

  closeSearch = () => {
    this.setState({
      searchOpen: false,
    });
  };

  handleSearchChange = (search) => {
    this.setState({
      search,
    });
  };

  handleSearchSubmit = () => {
    this.props.navigate('liste', true, {
      search: this.state.search,
    });

    this.setState({
      searchOpen: false,
      search: '',
    });
  };

  handleOpenClick = (e) => {
    e.preventDefault();
    this.openSearch();
    setTimeout(() => {
      this.search.focus();
    }, 0);
  };

  render() {
    const { pageName } = this.props;
    const { searchOpen } = this.state;
    const smallLogo = pageName !== 'index';

    return (
      <Branding
        logoContent={<LogoLink small={smallLogo} />}
      >
        <div className="header-nav">
            <div className="nav__item rounded mr-1">
            <Link pageName="technologien" className="icon-link" activeClassName="active">
              <span className="icon icon--technology icon-link__icon"></span>
              <span className="d-none d-md-inline-block">Technologien</span>
            </Link>
          </div>
          <div className={classNames('nav__item', 'rounded', 'nav__item-search', { 'is-open': searchOpen })}>
            <a className="icon-link" href="#" onClick={this.handleOpenClick}>
              <span className="icon icon--search icon-link__icon"></span>
              <span className="d-none d-md-inline-block">Suche</span>
            </a>
            <div className={classNames('nav__search', { 'is-open': searchOpen })}>
              <Search
                value={this.state.search}
                onClose={this.closeSearch}
                onSubmit={this.handleSearchSubmit}
                onChange={this.handleSearchChange}
                open={searchOpen}
                ref={(s) => { this.search = s; }}
              />
            </div>
          </div>
        </div>
      </Branding>
    );
  }
}


export default connect(
  undefined,
  actions
)(Header);
