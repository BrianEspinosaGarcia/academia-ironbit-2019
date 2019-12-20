'use strict'
const assert = require('chai').assert;
const validSolution =require('../src/esplais.js');

suite('Function esplais Validator', () =>{
    
    test('Cut and add Elements', () => {
        Array.prototype.esplaisMethod = validSolution;
        let arrP = [1,2,3,4];
        assert.deepEqual(arrP.esplaisMethod( 2, 1,     5,6,7,7,8),[1, 2, 4, 5, 6, 7, 7, 8]);
    });
    test('Only Cut ', () => {
        Array.prototype.esplaisMethod = validSolution;
        let arrP = [1,2,3,4];
        assert.deepEqual(arrP.esplaisMethod( 2, 1 ),[1, 2, 4]);
    });
    test('reverse Cut and add elements', () => {
        Array.prototype.esplaisMethod = validSolution;
        let arrP = [1,2,3,4];
        assert.deepEqual(arrP.esplaisMethod( 2, -1, 5,6 ),[1 ,3, 4, 5, 6]);
    });
    test('Sintax Error, no se permite indice negativo', () => {
        Array.prototype.esplaisMethod = validSolution;
        let arrP = [1,2,3,4];
        assert.equal(arrP.esplaisMethod( -2, 1, 5,6 ),'Sintax Error, no se permite indice negativo');
    });
    test('Not delete', () => {
        Array.prototype.esplaisMethod = validSolution;
        let arrP = [1,2,3,4];
        assert.deepEqual(arrP.esplaisMethod( 2, 0, 4,5,6,7,8 ),[ 1,2,3,4, 4,5,6,7,8]);
    });

});
