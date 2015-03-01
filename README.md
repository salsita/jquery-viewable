# jquery-viewable  
  
`$('#target').viewable()`  
  
**Returns a boolean value and only for the first element found in query! NOT chainable.**  
  
A quick library that checks for various attributes of when an element is visible to the user:  

- `display: none` on target and/or parents (stops at `body`)
- `visibility: hidden` on target and/or parents
- `opacity` of target and/or parents (configurable minimum)
- whether an element is in viewport (configurable tolerance)
- **TODO** whether an element is below page fold (reachable by scrolling)
- **TODO** whether an element is overlayed by a higher z-Index element
- **TODO** whether an element is hidden by a combination of 3D transforms

## Options
`$('#target').viewable({  
  opacityMin: 0.2,  
  checkViewport: false
});`  

`checkOpacity` - Controls the opacity check, default `true`.  
`opacityMin` - A visible element must have opacity greater than this value, default `0`.    
`checkParents` - Check CSS values of parent elements (stops at `body`), default `true`.  
`checkViewport` - Checks whether a part of the element is in the visible viewport, default `true`.  
`viewportTolerance` - Tolerance for the viewport check in pixels, default `0`.