import React, {Component} from 'react';

import { create} from 'react-test-renderer';

import Header from '../components/Header';

describe("should create the header component",()=>{   // test suite
    test("render the header component template" ,()=>{  //test spec
        let tree= create(<Header/>);
        expect(tree.toJSON()).toMatchSnapshot();
    })
})