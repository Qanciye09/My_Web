const input = document.getElementById("input-box");
const list = document.getElementById("list-container");
//lamadoodba waa lama id oo waxaan ku soo sameeyay htmlka sadarka 14aad(input-box) iyo kan 19aad(list-container)
//idga input-box wxa ku soo shubtay variable la dhoho [input]so hadaan rabo inaa isticmaalo  idga input-box waxaa wacanaa 
//variableka cusub ee [input]
//sidoo kale asna idga list-container hda rabo waxaa wacana varibleka cusub aan ku soo shubtay ee [list]











//waxaa sameestay function la dhoho addTask waxaana ka wacday button add oo igu sameesan htmlka sadarka 15aad 
//mrki add aan dhoho shaqadaan ii qabo oo hoos ku xusan
function AddTask(){
    if(input.value === ''){
        alert("Enter text first");
    }
    //hadii qofka uusan wax soo galinin ay meesha oo maran add dhaho ii soo bandhig messagekaan   Enter text first
    //haduu qofka wax soo galshana shaqadaan ii qabo oo hoos ku xusan 
    
    else
    {
        let li = document.createElement("li"); //tag li la dhoho la sameeyay 
        li.innerHTML = input.value;//li ga sameeya  qiimihiisa ha noqdo userka wa uu soo galiyay
        list.appendChild(li);// li ga iigu shub list 
        //F.G: list waxa oo ii wadaa list-container id wxaana waye (ul), waxa loola jeeda li ga aad sameesay iigu soo dar ulka
        let cancel  = document.createElement("span");//tag span la dhoho sameestay 
        cancel.innerHTML = "\u00d7"; //tag valueskiisa igaa dhig (\u00d7) waana unicode oo u taagan X
        li.appendChild(cancel);// waxaa ku shubtaana li ga 
    }
    input.value = "";//markee shaqada kor ku xusan dhan ee dhacdo meesha wax laga soo galinaayo ebar igaaga dhig 
    storeData();// marka ka dhigtid ebarna ii keedi
}








// waa waxyaabaha marka click la siiyo dhacaya  
list.addEventListener("click", event =>{  //ul list ayaa ku soo dare [addEventListener] wxana isticmlaya eventiga ah click iyo arrow function
    if(event.target.tagName === "LI"){//hadii kan click lasiiyay oo noqdo li ga 
        event.target.classList.toggle("checked");//gadi eena ii keedi
        storeData();//mrka gadisidna xogta ii keedi
    }



    
    else if(event.target.tagName === "SPAN"){  // haduuu noqdo kan click lasiiyay spanka ama cancelka 
        event.target.parentElement.remove();//  parentElement iska daleed 
        storeData();//xogtana ii keedi
    }
});  




function storeData(){ //functionka xogta ii keedinaayay inta ku sameeyay
    localStorage.setItem("data", list.innerHTML);//xogta la keedinaayo wxa ka dhigta wxa lasoo galiyay listiga 
}


function showData(){// waa function xogta ii soo muujinaayo
    list.innerHTML = localStorage.getItem("data");// xogtaas la keediyay ii soo muuji
}
showData();