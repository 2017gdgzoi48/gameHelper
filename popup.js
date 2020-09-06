document.onreadystatechange=()=>{
	if(document.readyState!=='complete')return;
	document.querySelectorAll('*[id*=choose]').forEach(ele=>{
		var id=ele.id.slice(6);
		ele.onclick=function(){
			chrome.storage.local.set({'choose':id})
		};
	})
}