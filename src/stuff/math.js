
// Math/Geometry

export default {

    // Distance from point to segment
    // p1 = point, (p2, p3) = segment
    point2seg(p1, p2, p3) {
        let area = this.area(p1, p2, p3)
        let dx = p3[0] - p2[0]
        let dy = p3[1] - p3[0]
        let base = Math.sqrt(dx * dx + dy * dy)
        return Math.abs(this.tri_h(area, base))
    },

    /* Area of triangle:
            p1
          /    \
        p2  _  p3
    */
    area (p1, p2, p3) {
	     return (
             p1[0] * (p2[1] - p3[1]) +
             p2[0] * (p3[1] - p1[1]) +
             p3[0] * (p1[1] - p2[1])
         )
    },

    // Triangle hight
    tri_h(area, base) {
	    return area / base
    }

}
