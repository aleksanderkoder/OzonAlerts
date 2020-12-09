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

          if (type == "notification") // Creates Ozon instance of type "notification" based on "type" parameter
          {
            let content = document.createElement("table");
            let contentRow = document.createElement("tr");
            let contentData1 = document.createElement("td");

            // Handles icon selection based on parameter "icon"
            if (icon == "success") 
            {
              contentData1.innerHTML =
                '<i style=" color: white; padding-right: 10px" class="fas fa-check"></i>';
            } 
            else if (icon == "error") 
            {
              contentData1.innerHTML =
                '<i style="color: white; padding-right: 10px" class="fas fa-times"></i>';
            } 
            else if (icon == "info") 
            {
              contentData1.innerHTML =
                '<i style="color: white; padding-right: 10px" class="fas fa-info"></i>';
            }

            // Handles message based on parameter "message"
            let contentData2 = document.createElement("td");
            contentData2.innerHTML = message;
            contentData2.style.width = "100%";
            contentData2.style.textAlign = "center";

            // Creates necessary remaining html elements
            el.appendChild(content);
            content.appendChild(contentRow);
            contentRow.appendChild(contentData1);
            contentRow.appendChild(contentData2);
          }
          else if (type == "dialog")  // Creates Ozon instance of type "dialog" based on "type" parameter
          {
            
          }
              

          // Handles position based on parameter "position"
          if (position == "top-left") 
          {
            el.style.left = 0;
            el.style.top = 0;
          } 
          else if (position == "top-right") 
          {
            el.style.right = 0;
            el.style.top = 0;
          } 
          else if (position == "top-middle") 
          {
            el.style.left = 0;
            el.style.right = 0;
            el.style.marginLeft = "auto";
            el.style.marginRight = "auto";
          } 
          else if (position == "bottom-left") 
          {
            el.style.left = 0;
            el.style.bottom = 0;
          } 
          else if (position == "bottom-middle") 
          {
            el.style.left = 0;
            el.style.right = 0;
            el.style.bottom = 0;
            el.style.marginLeft = "auto";
            el.style.marginRight = "auto";
          } 
          else if (position == "bottom-right") 
          {
            el.style.right = 0;
            el.style.bottom = 0;
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