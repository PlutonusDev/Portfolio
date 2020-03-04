import React, { Component } from 'react';
import { stack as Menu } from 'react-burger-menu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './css/global.css';

import Header from './model/header';
import Content from './model/content';

class Page extends Component {
	render() {
		return (
			<div id="outer-container">
				<Menu pageWrapId={'page-wrap'} outerContainerId={'outer-container'}>
					<a id="linkedin" className="menu-item" href="https://www.linkedin.com/in/plutonus"
						target="_blank" rel="noopener noreferrer">
						<FontAwesomeIcon className="icon" icon={['fab', 'linkedin']} fixedWidth />LinkedIn
					</a>
					<a id="contact" className="menu-item" href="mailto://plutonus.stream@gmail.com">
						<FontAwesomeIcon className="icon" icon="envelope" fixedWidth />Contact Me
					</a>
					<a id="support" className="menu-item" href="https://paypal.me/plutonus/5aud">
						<FontAwesomeIcon className="icon" icon="coffee" fixedWidth />Donate
					</a>
				</Menu>
				<main id="page-wrap">
					<Header />
				</main>
			</div>
		);
	}
}

export default Page;