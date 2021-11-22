<p align="center">
   <img src="https://user-images.githubusercontent.com/49065176/118849587-2b0e5500-b8d0-11eb-9b7c-8fe8beb3fd14.png">
</p>

A pretty, yet easy-to-use Javascript framework for customizable popup boxes, featuring a modern and elegant design. 

## Getting started

Include the ***OzoneAlerts*** folder in your project folder.  

**OzoneAlerts.js** needs to be included with a script tag in your HTML as shown below:

```<script src="OzoneAlerts.js"></script>```

**OzoneAlerts.css** needs to be included using a link tag in your head section as shown below: 

```<link rel="stylesheet" href="OzoneAlerts.css">```

Remember to change the file paths in the above examples according to the structure of your project. 

OzoneAlerts.js should now be ready for use. 

## Usage

***Examples***

Basic usage: 
```javascript
Ozone.fire("success", "Hello, world!", "top-left");
```
Advanced usage: 
```javascript
let options = {backgroundColor: "green", fontColor: "#8b0000"};

Ozone.fire("success", "Would you like a cinnamon roll?", "top-left", "dialog", options, 
   function () { 
      alert("You just pressed the confirm button!")}, 
   function () {
      alert("You just pressed the cancel button!")}
      );
```


***Parameters***

Method parameter structure:
```javascript
Ozone.fire(icon, message, position, type, options, onConfirm, onCancel); 
```

*The first three parameters are required.*

The first parameter *"icon"* will choose what icon is used. There are three options:
 1. "success"
 2. "error"
 3. "info"
 
The second parameter *"message"* is where you input the message you want to show in your alert. 

The third parameter *"position"* controls where on the screen the alert should be positioned. There are seven options: 
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

The fifth parameter *"options"* (optional) is an object containing different properties which are used to configure the alert visually. Create and object containing the options you want and pass it as a parameter to the  *Ozone.fire()* method.
An example of the options object:

```javascript 
let options = {backgroundColor: "green", fontColor: "#8b0000"};  
```
 
 The sixt and seventh parameters *"onConfirm"* (optional) and *"onCancel"* (optional) controls what should happen when each of the two dialog buttons are pressed.
 These parameters take a function containing whatever code you want. 
  - See the "advanced usage" example under the *Usage* section for an exact example of how these parameters can be used. 
 
## Visual customization 

**OzoneAlerts.js** can be visually customized using the *"options"* parameter, using an object containing the wanted properties. These options are split into two categories. One that is relevant for both types ("notification" and "dialog"), and one that is only applied for the "dialog" type alert. All standard CSS values are valid for the specified properties.

The general customization options available are: 
 1. backgroundColor - Sets the "background-color" CSS property for the alert element.
   - Example value: "green", "#8b0000" etc. 
 2. fontColor - Sets the "font-color" CSS property for the alert element.
   - Example value: "red", "#FFFF00" etc. 
 3. iconColor - Sets the color CSS property for the icon in the alert element.
   - Example value: "black", "#000000" etc.  
 4. borderRadius - Sets the "border-radius" CSS property for the alert element. 
   - Example value: "5px"
 5. border - Sets the "border" CSS property for the alert element. 
   - Example value: "5px solid white" 

The "dialog" specific customization options available are: 
 1. confirmButtonText - Sets the inner text of the confirmation button. 
   - Example value: "Hello, world!"
 2. cancelButtonText - Sets the inner text of the cancellation button.
   - Example value: "Goodbye, world!"
 3. confirmButtonColor - Sets the "background-color" CSS property for the confirmation button.
   - Example value: "green", "#8b0000" etc. 
 4. cancelButtonColor - Sets the "background-color" CSS property for the cancellation button. 
   - Example value: "red", "#008080" etc. 
 5. confirmButtonRadius - Sets the "border-radius" CSS property for the confirmation button. 
   - Example value: "5px"
 6. cancelButtonRadius - Sets the "border-radius" CSS property for the cancellation button.
   - Example value: "15px"


If you require more control over the visuals, the alerts can be customized via the *OzoneAlerts.css* style sheet. This requires basic knowledge of CSS, however.
 
## Dependencies 
  - Font Awesome (https://fontawesome.com/) - Needed for icons to appear. Include it within the head tag of your HTML. 
