// 1. Hide cursor when cursor enters webpage bounds.
// 2. Move diamond shape with cursor location.
// 3. Align diamond shape to page number box when cursor nears border of the box.
//        Move diamond shape to page number box.
//        Rotate diamond 45 degrees.
//        Dilate diamond to size of page number box.
// 4. Reverse the previous process when the cursor leaves bounds of the numbered box.

// Pseudocode

// Repeat while cursor is in webpage
//     Hide cursor
//     Display diamond on cursor location

// If cursor location is on page number box
//     Slide diamond location to page number box center
//     Rotate diamond 45 degrees
//     Dilate diamond to size of page number box
// Else
//     Slide diamond location to cursor
//     Rotate diamond -45 degrees
//     Shrink diamond to original size
