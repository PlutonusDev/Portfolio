import React from 'react';
import ReactDOM from 'react-dom';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCoffee, faEnvelope } from '@fortawesome/free-solid-svg-icons';

import Portfolio from './components/portfolio';

library.add(fab, faCoffee, faEnvelope);

ReactDOM.render(<Portfolio />, document.getElementById('root'));