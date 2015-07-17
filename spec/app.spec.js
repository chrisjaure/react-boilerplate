/*eslint-env jasmine */
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import {mockDeps} from './util';

describe('App', () => {
    let App = mockDeps('../src/components/app');
    it('should render a header', () => {
        let element = React.createElement(App);
        expect(ReactDOMServer.renderToStaticMarkup(element)).toMatch('<h1>App</h1>');
    });
});
