<p align="center">
  <img src="https://i.ibb.co/Pw7jy22/e.png" alt="OzoneAlerts logo">
</p>
 <p align="center">
  <img src="https://i.ibb.co/NTBgRNz/ozone-logo-alt-3.png" alt="OzoneAlerts logo">
</p>

A pretty, yet easy-to-use Javascript framework for customizable popup boxes, featuring a modern and elegant design. 

## Getting started

Include the ***OzoneAlerts*** folder in your project folder.  

**OzoneAlerts.js** needs to be included with a script tag in your HTML as shown below:

```<script src="OzoneAlerts/OzoneAlerts.js"></script>```

**OzoneAlerts.css** needs to be included using a link tag in your head section as shown below: 

```<link rel="stylesheet" href="OzoneAlerts/OzoneAlerts.css">```

Remember to change the file paths in the above examples according to the structure of your project. 

OzoneAlerts.js should now be ready for use. 

## Usage

***Examples***

Basic usage: 
```javascript
Ozone.fire("success", "Hello, world!", "top-left")
```
Advanced usage: 
```javascript
Ozone.fire("success", "Would you like a cinnamon roll?", "top-left", "dialog", "Yes thanks!", "No thanks!", 
   function () { 
      alert("You just pressed the confirm button!")}, 
   function () {
      alert("You just pressed the cancel button!")}
      )
```


***Parameters***

Method parameter structure:
```javascript
Ozone.fire(icon, message, position, type, confirmButtonText, cancelButtonText, onConfirm, onCancel)
```

*The first three parameters are required.*

The first parameter *"icon"* will choose what icon is used. There are three options:
 1. "success"
 2. "error"
 3. "info"
 
The second parameter *"message"* is where you input the message you want to show in your alert. 

The third parameter *"position"* controls where on the screen the alert should be positioned. There are 6 options: 
 1. "top-left" - Top left corner of screen. 
 2. "top-middle" - Top middle of screen.
 3. "top-right" - Top right corner of screen.
 4. "bottom-left" Bottom left corner of screen.
 5. "bottom-middle" - Bottom middle of screen.
 6. "bottom-right" - Bottom right corner of screen.
 7. "center" - Horizontal and vertical center of screen. 

The fourth parameter *"type"* (optional) chooses what type of alert should be shown. There are two options:
 1. "notification" - (default) The standard slim variant. 
 2. "dialog" - The full-sized variant allowing user input via programmable buttons. 

The fifth parameter *"confirmButtonText"* (optional) sets the text shown inside the "confirm" dialog button.
 - Example value: "I got it!"

The sixt parameter *"cancelButtonText"* (optional) sets the text shown inside the "cancel" dialog button.
 - Example value: "No thanks!"
 
 The seventh and eight parameters *"onConfirm"* (optional) and *"onCancel"* (optional) controls what should happen when each of the two dialog buttons are pressed.
 These parameters take a function containing whatever code you want. 
  - See the "advanced usage" example under the *Usage* section for an exact example of how these parameters can be used. 
 
## Visual customization 

The alerts can be easily customized via the *OzoneAlerts.css* style sheet. This requires basic knowledge of CSS, however.
 
## Dependencies 
  - Font Awesome (https://fontawesome.com/) - Needed for icons to appear. Include it within the head tag of your HTML. 
