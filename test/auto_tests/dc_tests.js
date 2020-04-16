// DataCube unit tests

import test from 'ava'

import DataCube from '../../src/helpers/datacube.js'

// DC.merge() tests
const dc = new DataCube()

// Simulate
dc.tv = {
    $set: function (parent, index, data) {
        parent[index] = data
    }
}

class Dst {
    constructor(arr) {
        this.p = this
        this.v = arr
        this.i = 'v'
    }
}

// [   src   ]...[   dst   ]

test('DC.merge() [src]...[dst]', t => {

    const dst = new Dst([[1005, 4], [1006, 5], [1007, 6]])
    const src = [[1000, 11], [1001, 22], [1002, 33]]
    const res = [
        [1000, 11], [1001, 22], [1002, 33],
        [1005, 4], [1006, 5], [1007, 6]
    ]

	t.deepEqual(dc.merge_ts(dst, src), res)
})


// [   src   ][   dst   ]...

test('DC.merge() [src][dst]', t => {

    const dst = new Dst([[1003, 4], [1004, 5], [1005, 6]])
    const src = [[1000, 11], [1001, 22], [1002, 33]]
    const res = [
        [1000, 11], [1001, 22], [1002, 33],
        [1003, 4], [1004, 5], [1005, 6]
    ]

	t.deepEqual(dc.merge_ts(dst, src), res)
})


// [   src    ].............
// ......[   dst     ]......

test('DC.merge() [src  [ ]  dst]', t => {

    const dst = new Dst([[1002, 4], [1003, 5], [1004, 6]])
    const src = [[1000, 11], [1001, 22], [1002, 33]]
    const res = [
        [1000, 11], [1001, 22], [1002, 33],
        [1003, 5], [1004, 6]
    ]

	t.deepEqual(dc.merge_ts(dst, src), res)
})


// [         src           ]
// ......[   dst     ]......

test('DC.merge() [  src  [dst]    ]', t => {

    const dst = new Dst([[1002, 3], [1003, 4]])
    const src = [
        [1000, 11], [1001, 22], [1002, 33],
        [1003, 44], [1004, 55], [1005, 66]
    ]
    const res = [
        [1000, 11], [1001, 22], [1002, 33],
        [1003, 44], [1004, 55], [1005, 66]
    ]

	t.deepEqual(dc.merge_ts(dst, src), res)
})


// [         src           ]
// [         dst           ]

test('DC.merge() src === dst', t => {

    const dst = new Dst([
        [1000, 1], [1001, 2], [1002, 3]
    ])
    const src = [
        [1000, 11], [1001, 22], [1002, 33]
    ]
    const res = [
        [1000, 11], [1001, 22], [1002, 33]
    ]

	t.deepEqual(dc.merge_ts(dst, src), res)
})


// ......[   src     ]......
// [         dst           ]

test('DC.merge() [  dst  [src]    ]', t => {

    const dst = new Dst([
        [1000, 1], [1001, 2], [1002, 3],
        [1003, 4], [1004, 5], [1005, 6]
    ])
    const src = [
        [1001, 22], [1002, 33],
        [1003, 44], [1004, 55]
    ]
    const res = [
        [1000, 1], [1001, 22], [1002, 33],
        [1003, 44], [1004, 55], [1005, 6]
    ]

	t.deepEqual(dc.merge_ts(dst, src), res)
})


// .........[   src     ]...
// [    dst     ]...........

test('DC.merge() [  dst  [  ]  src  ]', t => {

    const dst = new Dst([
        [1000, 1], [1001, 2], [1002, 3],
        [1003, 4]
    ])
    const src = [
        [1002, 33], [1003, 44], [1004, 55],
        [1005, 66]
    ]
    const res = [
        [1000, 1], [1001, 2], [1002, 33],
        [1003, 44], [1004, 55], [1005, 66]
    ]

	t.deepEqual(dc.merge_ts(dst, src), res)
})

// [   dst   ][   src   ]...

test('DC.merge() [dst][src]', t => {

    const dst = new Dst([[1000, 1], [1001, 2], [1002, 3]])
    const src = [[1003, 44], [1004, 55], [1005, 66]]
    const res = [
        [1000, 1], [1001, 2], [1002, 3],
        [1003, 44], [1004, 55], [1005, 66]
    ]

	t.deepEqual(dc.merge_ts(dst, src), res)
})


// [   dst   ]...[   src   ]

test('DC.merge() [dst]...[src]', t => {

    const dst = new Dst([[1000, 1], [1001, 2], [1002, 3]])
    const src = [[1005, 66], [1006, 77], [1007, 88]]
    const res = [
        [1000, 1], [1001, 2], [1002, 3],
        [1005, 66], [1006, 77], [1007, 88]
    ]

	t.deepEqual(dc.merge_ts(dst, src), res)
})

// Mixed overlaps, like this:
//  . . . . . . . . . . . 1000.5
//   . . . . . . . . . . 1000

// [   src_mix    ].............
// ......[   dst_mix     ]......

test('DC.merge() [src_mix  [ ]  dst_mix]', t => {

    const dst = new Dst([[1002, 4], [1003, 5], [1004, 6]])
    const src = [[1000, 11], [1001, 22], [1002.5, 33], [1003.5, 44]]
    const res = [
        [1000, 11], [1001, 22], [1002, 4], [1002.5, 33],
        [1003, 5], [1003.5, 44], [1004, 6]
    ]

	t.deepEqual(dc.merge_ts(dst, src), res)
})

// [         src_mix           ]
// ......[   dst_mix     ]......


test('DC.merge() [  src_mix  [dst_mix]  ]', t => {

    const dst = new Dst([[1002.5, 3], [1003.5, 4]])
    const src = [
        [1000, 11], [1001, 22], [1002, 33],
        [1003, 44], [1004, 55], [1005, 66]
    ]
    const res = [
        [1000, 11], [1001, 22], [1002, 33],
        [1002.5, 3], [1003, 44], [1003.5, 4],
        [1004, 55], [1005, 66]
    ]

	t.deepEqual(dc.merge_ts(dst, src), res)
})

// ......[   src_mix     ]......
// [         dst_mix           ]

test('DC.merge() [  dst_mix  [src_mix]    ]', t => {

    const dst = new Dst([
        [1000, 1], [1001, 2], [1002, 3],
        [1003, 4], [1004, 5], [1005, 6]
    ])
    const src = [
        [1001.5, 22], [1002.5, 33],
        [1003, 44], [1004, 55]
    ]
    const res = [
        [1000, 1], [1001, 2], [1001.5, 22],
        [1002, 3], [1002.5, 33],
        [1003, 44], [1004, 55], [1005, 6]
    ]

	t.deepEqual(dc.merge_ts(dst, src), res)
})

// .........[   src_mix     ]...
// [    dst_mix     ]...........

test('DC.merge() [  dst_mix  [  ]  src_mix  ]', t => {

    const dst = new Dst([
        [1000, 1], [1001, 2], [1002.5, 3],
        [1003, 4]
    ])
    const src = [
        [1002, 33], [1003, 44], [1004, 55],
        [1005, 66]
    ]
    const res = [
        [1000, 1], [1001, 2], [1002, 33],
        [1002.5, 3], [1003, 44], [1004, 55],
        [1005, 66]
    ]

	t.deepEqual(dc.merge_ts(dst, src), res)
})

// .[      src_mix     ]......
// [      dst_mix     ].......

test('DC.merge() [[  src_mix  dst_mix  ]]', t => {

    const dst = new Dst([
        [1000, 1], [1001, 2], [1002, 3],
        [1003, 4], [1004, 5], [1005, 6]
    ])
    const src = [
        [1000.5, 11], [1001.5, 22], [1002, 33],
        [1002.5, 44], [1004.5, 55], [1005.5, 66]
    ]
    const res = [
        [1000, 1], [1000.5, 11], [1001, 2],
        [1001.5, 22], [1002, 33], [1002.5, 44],
        [1003, 4], [1004, 5], [1004.5, 55],
        [1005, 6], [1005.5, 66]
    ]

	t.deepEqual(dc.merge_ts(dst, src), res)
})
