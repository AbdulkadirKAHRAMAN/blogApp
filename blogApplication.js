let blog=[];
let currentId = 1;
if(localStorage.getItem("blog")){
    blog=JSON.parse(localStorage.getItem("blog"));
}

function isAccepted(msg, ...keys){
    const value=prompt(msg);
    if(keys.includes(value)){
        return value;
    }else{
        return isAccepted(msg,...keys);
    }

}
function addText(){
    const firstName=prompt("isim giriniz.");
    const lastName=prompt("Soyisminizi giriniz.");
    const blogHeader=prompt("Blog başlığı giriniz");
    const blogText=prompt("blog yazınızı giriniz");
    alert("Blog yazınız başarı ile eklendi");
    blog.push(
        {
            id: currentId,
            firstName,
            lastName,
            blogHeader,
            blogText
        }
    )
    currentId++;
    localStorage.setItem("blog", JSON.stringify(blog));
    
    return nextAction();
    

}

function readBlogPost(){
    const blogHeader= blog.map((blog,index)=> `ID: ${blog.id} ${blog.blogHeader}`).join("\n");
    const value=prompt(`okumak istediğiniz blog başlığının ıd sini giriniz\nVazgeçmek istiyorsanız x yazınız\n${blogHeader}`);
    const findBlog= blog.find(blog=>blog.id==value);
    if(findBlog== -1 && value.toLowerCase !="x"){
        if(value.toLowerCase() === "x"){
            return mainMenu();
        }
        alert("Yanlış bir ID değeri girdiniz");
        return readBlogPost();
    }
    
    alert(`${findBlog.blogHeader}\n${findBlog.blogText}`);
    localStorage.setItem("blog", JSON.stringify(blog));
    
   return nextAction()

}

function mainMenu(){
    const value=isAccepted("Yapmak istediğiniz işlemi seciniz:\n1.Blog yazısı ekleyin:\n2.Blog yazızı oku\n3.Çıkış","1","2","3");
    if(value==1){
        return addText();
    }else if(value==2){
        return readBlogPost();
    }
}
function nextAction(){
    const value = isAccepted("Başka bir işlem yapmak ister misiniz? (e/h)", "e", "h", "E", "H"); 
    if(value.toLowerCase() === "e"){
        return mainMenu();
    }else{
        alert("Güle güle....")
        return;
    }
}
mainMenu();