In this project, let's build a **Layout Builder App** by applying the concepts we have learned till now.

### Refer to the image below:

<br/>
<div style="text-align: center;">
    <img src="https://assets.ccbp.in/frontend/content/react-js/layout-builder-output.gif" alt="Layout Builder Output" style="max-width:70%;box-shadow:0 2.8px 2.2px rgba(0, 0, 0, 0.12)">
</div>
<br/>

### Design Files

<details>
<summary>Click to view</summary>

- [Extra Small (Size < 576px) and Small (Size >= 576px)](https://assets.ccbp.in/frontend/content/react-js/layout-builder-sm-output-v0.png)
- [Medium (Size >= 768px), Large (Size >= 992px) and Extra Large (Size >= 1200px)](https://assets.ccbp.in/frontend/content/react-js/layout-builder-lg-output.png)

</details>

### Set Up Instructions

<details>
<summary>Click to view</summary>

- Download dependencies by running `npm install`
- Start up the app using `npm start`
</details>

### Completion Instructions

<details>
<summary>Functionality to be added</summary>
<br/>

The app must have the following functionalities

- Initially, the checkboxes for Content, Left Navbar, Right Navbar should be checked and all the elements in the layout should be displayed
- When the Content checkbox is unchecked, then the content element should not be displayed
- When the Left Navbar checkbox is unchecked, then the Left Navbar element should not be displayed
- When the Right Navbar checkbox is unchecked, then the Right Navbar element should not be displayed
- When any of the checkbox is checked, then the respective element should be displayed accordingly
- The Configuration Context has an object as a value with the following properties
  - `showContent` - this key is used to display the Content Element
  - `showLeftNavbar` - this key is used to display the Left Navbar Element
  - `showRightNavbar` - this key is used to display the Right Navbar Element
  - `onToggleShowContent` - this method is used to update the value of the `showContent`
  - `onToggleShowLeftNavbar` - this method is used to update the value of the `showLeftNavbar`
  - `onToggleShowRightNavbar` - this method is used to update the value of the `showRightNavbar`

</details>

<details>
<summary>Components Structure</summary>

<br/>
<div style="text-align: center;">
    <img src="https://assets.ccbp.in/frontend/content/react-js/layout-builder-component-breakdown-structure.png" alt="layout builder component structure breakdown" style="max-width:100%;box-shadow:0 2.8px 2.2px rgba(0, 0, 0, 0.12)">
</div>
<br/>

</details>


