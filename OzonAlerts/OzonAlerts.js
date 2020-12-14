// Injects the CSS-file 
let head  = document.getElementsByTagName('head')[0];
let link  = document.createElement('link');
link.rel  = 'stylesheet';
link.type = 'text/css';
link.href = 'OzonAlerts.css';
head.appendChild(link);

class Ozon 
      {
        static fire(icon, message, position, type = "notification", confirmButtonText = "Confirm", cancelButtonText = "Cancel", onConfirm = function() {}, onCancel = function () {}) 
        {
          console.log("Firing Ozon..."); 

          // Creates essential elements
          const el = document.createElement("div");
          el.id = "Ozon";
          const content = document.createElement("table");
          content.id = "OzonTable"; 
          const contentRow1 = document.createElement("tr");
          const contentData1 = document.createElement("td");
          const contentData2 = document.createElement("td");
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

          // Creates Ozon instance of type "notification" based on "type" parameter
          if (type == "notification") 
          {
            // Appends second table data 
            contentRow1.appendChild(contentData2);
          }
          else if (type == "dialog")  // Creates Ozon instance of type "dialog" based on "type" parameter
          {
            // Creates necessary table elements for dialog
            const contentRow2 = document.createElement("tr");
            const contentRow3 = document.createElement("tr");
            const contentData3 = document.createElement("td");
            const contentData4 = document.createElement("td");

             
            const btnConfirm = document.createElement("button")
            btnConfirm.id = "OzonBtnConfirm"; 
            btnConfirm.innerHTML = confirmButtonText; 
            const btnCancel = document.createElement("button")
            btnCancel.id = "OzonBtnCancel";
            btnCancel.innerHTML = cancelButtonText;

            // Appends elements to parent element
            content.appendChild(contentRow2);
            content.appendChild(contentRow3);
            contentRow2.appendChild(contentData2);
            contentRow2.appendChild(contentData2);
            contentRow3.appendChild(contentData3);
            contentRow3.appendChild(contentData4);
            contentData3.appendChild(btnConfirm);
            contentData3.appendChild(btnCancel);
             
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
          
          // Handles behavior of Ozon-alert upon deletion based on type
          if (type == "notification")
          {
            setTimeout(function () 
            {
              el.style.animation = "fadeOut ease 1s";
            }, 7000);

            setTimeout(function () 
            {
              el.parentNode.removeChild(el);
            }, 8000); 
          }
          else if (type == "dialog")
          {
            OzonBtnConfirm.onclick = function () 
            {
              onConfirm(); 
              removeOzonAlert(el); 
            }

            OzonBtnCancel.onclick = function () 
            {
              onCancel(); 
              removeOzonAlert(el);
            }
          }
          
          
          // Function that removes a given Ozon-element with a fadeOut-effect
          function removeOzonAlert(element)
          {
            element.style.animation = "fadeOut ease 0.5s";
            setTimeout(function () 
            {
              element.parentNode.removeChild(element);
            }, 500);
          }
          
        }
      }