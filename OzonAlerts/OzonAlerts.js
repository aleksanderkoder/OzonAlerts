class Ozon 
      {
        static fire(type, message, position) 
        {
          let el = document.createElement("div");
          el.id = "Ozon";
          let content = document.createElement("table");
          let contentRow = document.createElement("tr");
          let contentData1 = document.createElement("td");

          // Handles icon selection based on parameter "type"
          if (type == "success") 
          {
            contentData1.innerHTML =
              '<i style=" color: lightgreen; padding-right: 10px" class="fas fa-check"></i>';
          } 
          else if (type == "error") 
          {
            contentData1.innerHTML =
              '<i style="color: red; padding-right: 10px" class="fas fa-times"></i>';
          } 
          else if (type == "info") 
          {
            contentData1.innerHTML =
              '<i style="color: lightblue; padding-right: 10px" class="fas fa-info"></i>';
          }

          // Handles message based on parameter "message"
          let contentData2 = document.createElement("td");
          contentData2.innerHTML = message;
          contentData2.style.width = "100%";
          contentData2.style.textAlign = "center";

          // Handles position based on parameter "position"
          if (position == "top-left") 
          {
            el.style.left = 0;
            el.style.top = 0;
          } 
          else if (position == "top-right") {
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

          // Creates necessary remaining html elements
          el.appendChild(content);
          content.appendChild(contentRow);
          contentRow.appendChild(contentData1);
          contentRow.appendChild(contentData2);

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