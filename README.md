 ** WORK IN PROGRESS **
 
 This framework is currently being developed. 

# OzonAlerts.js
 
A pretty and easy-to-use Javascript framework for customizable popup boxes, featuring a modern and elegant design. 

## Installation

Include the ***OzonAlerts*** folder in your project folder.  

**OzonAlerts.js** needs to be included with a script tag in your HTML as shown below:

``` <script type="text/javascript" src="OzonAlerts/OzonAlerts.js"></script>```

The necessary CSS-file (**OzonAlerts.css**) will be automatically injected into your HTML via the Javascript file mentioned above. 

OzonAlerts.js should now be ready for use. 

## Usage

***Examples***

Basic usage: 
```javascript
Ozon.fire("success", "Hello, world!", "top-left")
```
Advanced usage: 
```javascript
Ozon.fire("success", "Would you like a cinnamon roll?", "top-left", "dialog", "Yes thanks!", "No thanks!", 
   function () { 
      alert("You just pressed the confirm button!")}, 
   function () {
      alert("You just pressed the cancel button!")}
      )
```


***Parameters***

Method parameter structure:
```javascript
Ozon.fire(icon, message, position, type, confirmButtonText, cancelButtonText, onConfirm, onCancel)
```

The first parameter *icon* will choose what icon is used. There are three options:
 1. "success"
 2. "error"
 3. "info"
 
The second parameter *message* is where you input the message you want to show in your alert. 

The third parameter *position* controls where on the screen the alert should be positioned. There are 6 options: 
 1. "top-left"
 2. "top-middle"
 3. "top-right"
 4. "bottom-left"
 5. "bottom-middle"
 6. "bottom-right"

The fourth parameter *type* (optional) chooses what type of alert should be shown. There are two options:
 1. "notification" - Default 
 2. "dialog"

## Dependencies 
  - Font Awesome (https://fontawesome.com/)
    Needed for icons to show up. 
