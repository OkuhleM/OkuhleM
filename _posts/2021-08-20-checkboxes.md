---
Layout:
Title:	"checkboxes"
Date:	2021-08-20
Categories:

---

# Introduction
 Today I'll be talking about the App that I have been building

 # Body

 I'll be talking about checkboxes.
 In React, Controlled Input is managed by state, so the input value can be changed only by changing the state related to that input.
 So if the checkbox is checked, we're setting the isChecked value to false. But if the checkbox is unchecked, we're setting the value to true using !isChecked. Then we pass that value in the input checkbox for the prop checked. in React, it's always recommended to use Controlled Input for input fields even if the code looks complicated. This guarantees that the input change happens inside only the onChange handler.

The state of the input will not be changed in any other way and you'll always get the correct and updated value of the state of the input.
Only in rare cases, you can use React ref to use the input in an uncontrolled way.
We can use multi select in React using react-select. We can also use multi select with check boxes using react-multiselect-checkboxes. 
We start by adding a dummy option {label: "All", value: "*"} in the options. If the option with the value "*" is selected or deselected we perform our logic of select all and deselect all. We use a state variable selectedOptions to keep a track of the selected options. According to our actions we set the value of the state selectedOptions using the state setter setSelectedOptions.
We initialize the ReactMultiSelectCheckboxes with our options, value custom onChange and an extra function prop setState to store the selected values in our state variable.

# Conclusion

App component is a container component - it encapsulates our entire React application, and renders three instances of Checkbox component and three buttons - Select All, Select None and Save buttons. App component also logs into the Developer Tools Console which checkboxes were checked when users click the Save button.