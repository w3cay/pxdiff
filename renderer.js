// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.

var div=document.querySelector('#drag');

//绑定拖拽事件
div.addEventListener('drop', function(e){
  alert(1)
	//必须要阻止拖拽的默认事件
    e.preventDefault();
    e.stopPropagation();
    
	//获得拖拽的文件集合
    var files=e.dataTransfer.files;

    if(files.length>0)
    {
     console.log(files[0].path);
    }
    
    var content=fs.readFileSync(files[0].path);
    console.log(content.toString());
  });

//绑定拖拽结束事件
div.addEventListener('dragover',(e)=>{
  alert(2)
	//必须要阻止拖拽的默认事件
    e.preventDefault();
    e.stopPropagation();

})
