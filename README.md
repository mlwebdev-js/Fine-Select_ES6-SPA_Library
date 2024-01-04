# Fine Select ES6: Single-Page-Application Library

## Introduction
Fine Select ES6 is a JavaScript Single-Page-Application (SPA) Library designed for modern web development. This library utilizes ES6 standards to provide a range of functionalities for dynamic web page manipulation and form handling.

## Features
- **DOM Manipulation**: Simplified methods for selecting, creating, and modifying DOM elements.
- **Dynamic Page Loading**: Ability to load and display content from external HTML files without page reloads.
- **Form Management**: Advanced form handling with dynamic field creation and data storage.

## File Structure
- `index.html`: Main HTML file.
- `css/main.css`: Stylesheet for the application.
- `js/`:
  - `DOMUtility/`:
    - `Utility.js`: Core utility functions for DOM manipulation.
    - `PageManager.js`: Manages page content and navigation.
    - `ContentMain.js`: Initializer for dynamic content and navigation setup.
  - `FormUtility/`:
    - `FormModel.js`: Model for form creation and management.
    - `FormMain.js`: Entry point for form initialization.

## Installation
To use Fine Select ES6 in your project, clone this repository and include the scripts in your HTML file:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <!-- Head Contents -->
</head>
<body>
    <!-- Body Contents -->

    <!-- Include JavaScript Files -->
    <script type="module" src="path_to/js/DOMUtility/Utility.js"></script>
    <!-- Other script includes -->
</body>
</html>
