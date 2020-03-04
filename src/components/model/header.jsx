import React, { Component } from 'react';
import { Tween, Timeline, SplitLetters } from 'react-gsap';

import '../css/animations.scss';

class Header extends Component {
	render() {
		return (
			<div className="header">
				<div className="headerItems">
				<img className="headerImage" src="assets/img/avatar.png" alt="Avatar" />
					<h2 className="headerName">
						<Tween from={{ x: '-500px' }} to={{ x: '80px' }} duration={0.7} ease="Elastic.easeOut" delay={1} />
						<Tween staggerTo={{ y: '55px' }} stagger={0.2} duration={0.1} ease="Back.easeOut" position="+=1" />
						<Tween staggerTo={{ x: '700px' }} stagger={0.2} duration={0.7} ease="Back.easeOut" position="+=1" />

						<Timeline
							wrapper={<div style={{ position: 'relative' }} />}
							target={
								<React.Fragment>
									<SplitLetters>
										<div id="name" style={{ fontSize: '28px', display: 'inline-block' }}>
											Joshua&nbsp;Hughes
										</div>
									</SplitLetters>
								</React.Fragment>
							}
						>
							<Tween staggerFrom={{ opacity: 0 }} staggerTo={{ opacity: 1 }} stagger={0.1} position="+=1" />
						</Timeline>
					</h2>
				</div>
			</div>
		);
	}
}

export default Header;