  searchXml: function(name) {
    var xmlDoc= null;
    try {
      if(window.ActiveXObject){ 
        xmlDoc=new ActiveXObject("Microsoft.XMLDOM"); 
      }  
      else if (document.implementation && document.implementation.createDocument){ 
        xmlDoc = document.implementation.createDocument('','',null); 
      } 
      
      xmlDoc.async="false";
      xmlDoc.load("currentPartner.xml");
    }
    catch(e) {
      try {  
        var xmlhttp = new window.XMLHttpRequest();  
        xmlhttp.open("GET","currentPartner.xml",false);  
        xmlhttp.send(null);  
        xmlDoc = xmlhttp.responseXML.documentElement;   
      }catch(e){  

      }  
    }
    var items = xmlDoc.getElementsByTagName("Placemark");
    if(items.length == 0) {
      description = "4th"
    }
    else {
      for (var i = 0; i < items.length; ++i) {
        if(name == items[i].getElementsByTagName("name")[0].textContent) {
          description = items[i].getElementsByTagName("description")[0].textContent;
          break;
        }
        else {
          description = "2nd"
        }  
      }
    }
    
  },