camelcase=()=>{
    stnce= document.getElementById('input').value;
    let outp=""
 let uppercase1=true
  for(let i=0;i<stnce.length;i++){
      if(stnce[i]===" "){
        outp+=" ";
        uppercase1=true;
  }else if(uppercase1){
    outp+=stnce[i].toUpperCase();
    uppercase1=false;
  }else{
    outp+=stnce[i]
  }
}
 document.getElementById('output').innerHTML=outp
}


uppercase=()=>{
    uppercs= document.getElementById('input').value;
    uppercsoup=uppercs.toUpperCase()
 document.getElementById('output').innerHTML=uppercsoup;
}

lowercase=()=>{
    lowercs= document.getElementById('input').value;
    lowercsoup=lowercs.toLowerCase();
 document.getElementById('output').innerHTML=lowercsoup;
}

reverse=()=>{
  let  reversecs= document.getElementById('input').value;
    let reversed="";

    for(let i=reversecs.length-1;i>=0;i--){
        reversed+=reversecs[i]
    }

 document.getElementById('output').innerHTML=reversed;
}

countvowel=()=>{
    countvowelcs= document.getElementById('input').value;
    
    temp=0;

for(let i=0;i<=countvowelcs.length-1;i++){
    if(countvowelcs[i]==="a"||countvowelcs[i]==="e"||countvowelcs[i]==="i"||countvowelcs[i]==="o"){
        temp++;
    //   console.log(i,str[i]);
      
    }
}

    document.getElementById('output').innerHTML=temp;
}

countcosoltant=()=>{
    countcosoltantcs= document.getElementById('input').value;
    temp3=0;
for(let i=0;i<=countcosoltantcs.length-1;i++){
    if(countcosoltantcs[i]=="a"||countcosoltantcs[i]=="e"||countcosoltantcs[i]=="i"||countcosoltantcs[i]=="o"||countcosoltantcs[i]=="u"){
      
    //   console.log(i,str[i]);
 
    }else{
        temp3++
    }
}

    document.getElementById('output').innerHTML=temp3;
}




countwords=()=>{
    countwordscs=document.getElementById('input').value;
    array=countwordscs.split(" ");
    lengtharray=array.length;
    document.getElementById('output').innerHTML=lengtharray;

}

longestword=()=>{
    sentc=document.getElementById('input').value;
    array2=sentc.split(" ");
    longestword=null;
    longest=0;
    for(let i=0;i<=array2.length-1;i++){
        if(longest<array2[i].length){
            longest=array2[i].length;
                      
            longestword=array2[i];
        }
    }
    document.getElementById('output').innerHTML=longestword;

}

mostfrequentcharacter=()=>{
    mfc=document.getElementById('input').value;
    count1=0;

    for(let i=0;i<mfc.length;i++){
        
    }
 


document.getElementById('output').innerHTML=count1;
}


checkforanagram=()=>{
    strg1=document.getElementById('input').value;
    // strg2=document.getElementById('input2').value;

    strg12=strg1.split(",");

    strg121=strg12[0];
    strg122=strg12[1];

    lowerstrg1= strg121.toLowerCase();
    lowerstrg2= strg122.toLowerCase();
 
    nospacestrg1=lowerstrg1.replace(" ","");
    nospacestrg2=lowerstrg2.replace(" ","");
   
    rayy=nospacestrg1.split("");
    rayy1=nospacestrg2.split("");
   
    sorting=rayy.sort();
    sorting2=rayy1.sort();

    
    spliting3=sorting.join("");
    spliting4=sorting2.join("");
    
    // let name4=[1,2,3,4]
    // console.log(name4.join(""));
    
    if(spliting3==spliting4 && nospacestrg1.length==nospacestrg2.length){
        rtn= "this is an anagram" ;
        
    }else{
        rtn= "this is not an anagram" ;
        
    }
    
document.getElementById('output').innerHTML=rtn;
}