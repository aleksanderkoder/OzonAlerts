// Injects the CSS-file 
let head  = document.getElementsByTagName('head')[0];
let link  = document.createElement('link');
link.rel  = 'stylesheet';
link.type = 'text/css';
link.href = 'OzonAlerts.css';
head.appendChild(link);

class Ozon 
      {
        static fire(icon, message, position, type = "notification") 
        {
          console.log("Firing Ozon..."); 

          let el = document.createElement("div");
          el.id = "Ozon";
          let content = document.createElement("table");
          content.id = "OzonTable"; 
          let contentRow1 = document.createElement("tr");
          let contentData1 = document.createElement("td");
          let contentData2 = document.createElement("td");
          contentData2.style.width = "100%";

          // Creates necessary remaining html elements
          el.appendChild(content);
          content.appendChild(contentRow1);
          contentRow1.appendChild(contentData1);

          // Handles message based on parameter "message"
          contentData2.innerHTML = message;

          // Handles icon selection based on parameter "icon"
          if (icon == "success") 
          {
            contentData1.innerHTML =
              '<i style=" color: white;" class="fas fa-check"></i>';
          } 
          else if (icon == "error") 
          {
            contentData1.innerHTML =
              '<i style="color: white;" class="fas fa-times"></i>';
          } 
          else if (icon == "info") 
          {
            contentData1.innerHTML =
              '<i style="color: white;" class="fas fa-info"></i>';
          }

          if (type == "notification") // Creates Ozon instance of type "notification" based on "type" parameter
          {
            // Appends second table data 
            contentRow1.appendChild(contentData2);
          }
          else if (type == "dialog")  // Creates Ozon instance of type "dialog" based on "type" parameter
          {
            // Creates necessary table elements for dialog
            let contentRow2 = document.createElement("tr");
            let contentRow3 = document.createElement("tr");
            let contentData3 = document.createElement("td");
            let contentData4 = document.createElement("td");

             
            let btnConfirm = document.createElement("button")
            let btnCancel = document.createElement("button")
            btnConfirm.innerHTML = "Confirm";
            btnCancel.innerHTML = "Cancel";

            // Appends elements to parent element
            content.appendChild(contentRow2);
            content.appendChild(contentRow3);
            contentRow2.appendChild(contentData2);
            contentRow2.appendChild(contentData2);
            contentRow3.appendChild(contentData3);
            contentRow3.appendChild(contentData4);
            contentData3.appendChild(btnCancel);
            contentData3.appendChild(btnConfirm);
            

          }
                       
          // Handles position based on parameter "position"
          switch (position)
          {
            case "top-left":  
              el.style.left = 0;
              el.style.top = 0;
              break; 

            case "top-right":  
              el.style.right = 0;
              el.style.top = 0;
              break; 

            case "top-middle":  
              el.style.left = 0;
              el.style.right = 0;
              el.style.marginLeft = "auto";
              el.style.marginRight = "auto";
              break; 

            case "bottom-left":  
              el.style.left = 0;
              el.style.bottom = 0;
              break; 

            case "bottom-middle":  
              el.style.left = 0;
              el.style.right = 0;
              el.style.bottom = 0;
              el.style.marginLeft = "auto";
              el.style.marginRight = "auto";
              break; 

            case "bottom-right":  
              el.style.right = 0;
              el.style.bottom = 0;
              break; 
          }

          // Handles animations upon creation and deletion of object
          setTimeout(function () {
            el.style.animation = "pulse 2s infinite";
          }, 1000);

          document.body.appendChild(el);

          setTimeout(function () {
            el.style.animation = "fadeOut ease 1s";
          }, 7000);

          setTimeout(function () {
            el.parentNode.removeChild(el);
          }, 8000);
          
        }
      }