// Tests for Segment.js
class SegmentTest extends Test{

    constructor(){
        super();
    }

    // Test for Segment.toString()
    toString(){
        let segment = new Segment([0, 0, 0, 0]);
        this.assertEquals("[0, 0, 0, 0]", segment.toString());

        segment._setSegment([2, 3, 5, 0]);
        this.assertEquals("[2, 3, 5, 0]", segment.toString());

    }

    // Test for Segment.equals()
    equals(){
      let segment = new Segment([1, 1, 1, 2]);
      let expectedSegment = new Segment([1, 1, 1, 2]);

      this.assertTrue(expectedSegment.equals(segment));

    }

    // Test for Segment.compactLeft()
    compactLeft(){
      let testArrays = [
        [2, 0, 2, 2],
        [0, 4, 2, 2],
        [8, 4, 2, 0],
        [0, 0, 0, 0]
      ]

      let expectedArrays = [
        [4, 2, 0, 0],
        [4, 4, 0, 0],
        [8, 4, 2, 0],
        [0, 0, 0, 0]
      ]

      for(let row = 0; row < testArrays.length; row++){
        let testSegment = new Segment(testArrays[row]);
        let expectedSegment = new Segment(expectedArrays[row]);
        this.assertTrue(expectedSegment.equals(testSegment.compactLeft()));
      }

    }

    // Test for Segment.reverse()
    reverse(){
      let testSegment = new Segment([0, 0, 0, 0]);
      this.assertEquals("[0, 0, 0, 0]", testSegment.reverse().toString());

      testSegment._setSegment([0, 4, 1, 2]);
      this.assertEquals("[2, 1, 4, 0]", testSegment.reverse().toString());

      testSegment._setSegment([2, 0, 2, 0]);
      this.assertEquals("[0, 2, 0, 2]", testSegment.reverse().toString());
    }
}

new SegmentTest().runAll();
