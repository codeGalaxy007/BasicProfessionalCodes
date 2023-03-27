  function downloadFile(data,fileName,mimeType){
    const blob=new Blob([data],{type:mimeType});
  
  const href=URL.createObjectURL(blob);
  
  
  const a=Object.assign(document.createElement("a"),{
    href,
    style:"display-none",
    download:fileName
  });
  document.body.appendChild(a)
  a.click()
  URL.revokeObjectURL(href)   
  a.remove()

  }

  const data="<p style=color:red>manikandan</p>"
  const fileName="success.html"
  const mimetype="text/html"

  const output=download(data,fileName,mimetype)
  console.log(output)


  
 
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  













