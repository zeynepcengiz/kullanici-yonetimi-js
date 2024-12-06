let kullaniciyönetimi = {
    kullanicilar : [],
    ekle: function(isim,email,yas){
        this.kullanicilar.push({isim: isim, email:email, yas: yas})
        console.log(isim+ " kullanıcı eklendi.")
    },
    listele:function(isim,email,yas){
        console.log("kullanıcılar");
        for (let i = 0; i<this.kullanicilar.length; i++){
            let kullan = this.kullanicilar[i];
            console.log((i+1) + ":" + kullan.isim + "-" + kullan.yas)
        }
    },
    sil : function(email){
        for (let i = 0; i< this.kullanicilar.length; i++){
            if (this.kullanicilar[i].email === email){
                this.kullanicilar.splice(i,1);
                console.log(email + " silindi.");
                break
            } 
        }
    }
}

kullaniciyönetimi.ekle("volkan", "okfpowkpf@şekf.com", "32");
kullaniciyönetimi.ekle("zeze", "zezeez@şekf.com", "22");

kullaniciyönetimi.listele("volkan", "okfpowkpf@şekf.com", "32");
kullaniciyönetimi.sil("zezeez@şekf.com")
