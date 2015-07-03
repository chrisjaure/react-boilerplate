/*eslint-env jasmine */
import React from 'react';
import {mockDeps} from './util';

describe('App', () => {
    let App = mockDeps('../src/components/app');
    it('should render a header', () => {
        let element = React.createElement(App);
        expect(React.renderToStaticMarkup(element)).toMatch('<h1>App</h1>');
    });
});
