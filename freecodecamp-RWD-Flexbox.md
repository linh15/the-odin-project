### Table of contents
# Start using flex
# Properties for flex container
# Properties for flex items



## Start using flex
Use display: flex to Position Two Boxes

## Properties for flex container
Use the flex-direction Property to Make a Row

Use the flex-direction Property to Make a Column

- Align Elements Using the justify-content Property
=> space the flex items along the line that is the main axis
center: aligns all the flex items to the center inside the flex container
flex-start: aligns items to the start of the flex container
flex-end: aligns items to the end of the flex container
space-between: aligns items to the center of the main axis, with extra space placed between the items
space-around: the space is distributed around all the items with a half space on either end of the flex container
space-evenly: Distributes space evenly between the flex items with a full space at either end of the flex container
eg. justify-content: center;

- Align Elements Using the align-items Property
=> align flex items along the cross axis
flex-start: aligns items to the start of the flex container
flex-end: aligns items to the end of the flex container
center: align items to the center
stretch: stretch the items to fill the flex container
baseline: align items to their baselines. Baseline is a text concept, think of it as the line that the letters sit on.
eg. align-items: center;

- Use the flex-wrap Property to Wrap a Row or Column



## Properties for flex items

Use the flex-shrink Property to Shrink Items

Use the flex-grow Property to Expand Items

Use the flex-basis Property to Set the Initial Size of an Item

Use the flex Shorthand Property

- Use the order Property to Rearrange Items
=> tell CSS the order of how flex items appear in the flex container, takes numbers as values, and negative numbers can be used (by default, items will appear in the same order they come in the source HTML)
eg. order: 1;

- Use the align-self Property
=> adjust each item's alignment individually, instead of setting them all at once
=> commonly used because float, clear, and vertical-align do not work on flex items
=> same values with align-items, overrides align-items
eg. align-self: center;
