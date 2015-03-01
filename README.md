# jquery-viewable  
  
`$('#target').viewable()`  
  
A jQuery library that performs several fast checks and returns `true` or `false` if an element is viewable by the user.  
In detail, it checks for:  

- `display: none` on element and its parents
- `visibility: hidden` on element and its parents
- `opacity: 0` on element and its parents (configurable minimum)
- if element is in viewport (configurable tolerance)
- **TODO** if element is below page fold (reachable by scrolling)
- **TODO** if element is overlayed by another element with higher `z-index` value
- **TODO** if element is hidden by a combination of 3D transforms
- **TODO** if element if below a javascript-based scrollbar fold

## Options
`$('#target').viewable({  
  opacityMin: 0.2,  
  checkViewport: false
});`  

`checkOpacity` - Controls the opacity check, default `true`.  
`opacityMin` - A visible element must have opacity greater than this value, default `0`.    
`checkParents` - Check CSS values of parent elements (stops at `body`), default `true`.  
`checkViewport` - Check if element is in the viewport, default `true`.  
`viewportTolerance` - A visible element must "peek" into the viewport above this value in pixels, default `0`.