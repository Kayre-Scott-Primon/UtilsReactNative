import React, { useState } from 'react';

export default function useCirclePerimeter(radius){
    const [perimeter, setPerimeter] = useState(0)
    const [r, setR] = useState(0)

    function setRadius(radius){
        setR(radius)
        let l = 2*Math.PI*r
        setPerimeter(l)
    }

    return [perimeter, setRadius]
}