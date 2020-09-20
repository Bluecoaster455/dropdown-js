# DropdownJS - Dropdowns using vanilla javascript

Demo: [https://bluecoaster455.github.io/dropdown-js/demo](https://bluecoaster455.github.io/dropdown-js/demo)

## Installation

Add the css and the script files to your project:
```html
<html>
  <head>
    ...
    <link href="/path/to/DropdownJS.css" type="text/css" rel="stylesheet"/>
  </head>
  <body>
    ...
    <script src="/path/to/DropdownJS.js" type="text/javascript"></script>
  </body>
</html>
```

## Add a dropdown
Simply have a ``<div>`` inside your ``<body>`` with the `dropdown` attribute and an `id`.
Everything inside the ``<div>`` is the content of your dropdown. You can override the styles
if needed.

The `dropdown-container` attribute defines the container of the dropdown and must not go
outside the container's boundaries (unless the dropdown is too big...)

```html
<div id="dropdown" dropdown dropdown-container="#dropdown-container" style="margin-top: 5px;">
    <ul>
        <li>
            <a href="javascript:;"><i class="far fa-user"></i> My account</a>
        </li>
        <li>
            <a href="javascript:;"><i class="far fa-newspaper"></i> Posts </a>
        </li>
        <li>
            <a href="javascript:;"><i class="fas fa-cog"></i> Settings</a>
        </li>
    </ul>
</div>
```

## Add a dropdown trigger

Add a button in your HTML page and assign the `dropdown-id` attribute to open/close
the respective dropdown in the HTML. You can add more than one button to open/close
the same dropdown. The `dropdown-align` will align the dropdown to the button `left` or `right`

```html
<button dropdown-id="dropdown" dropdown-align="left">Click me to open the dropdown</button>
```

# DropdownJS API functions
```js
DropdownJS.show("dropdownid"); // display the dropdown by id.
DropdownJS.hide("dropdownid"); // hide a dropdown by id. You can specify nothing as id to hide all dropdowns.
DropdownJS.isOpen("dropdownid"); // checks if the dropdown is open.
DropdownJS.find("dropdownid"); // Find a dropdown by id and return a Dropdown instance.
DropdownJS.findByElement(document.querySelector("#dropdown")); // Find a dropdown by element.
```

## Licence
DropdownJS is under [MIT licence](https://opensource.org/licenses/mit-license.php)