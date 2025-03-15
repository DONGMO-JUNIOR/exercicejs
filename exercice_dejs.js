// stp utilise les arrow fonction pour toutes les foncions 
//exercise 01
let varAleatoire = Math.floor(Math.random()*10)+1;
        console.log(varAleatoire);
  
const guessNumber= (numb) =>(numb ===varAleatoire)? "good luck" : "Not Matched";
   
console.log(guessNumber(4))
//valide

//exrcise 02
   
   let year = new Date () ;
   let cmas = new Date(year.getFullYear(),11,25) ;
     if (year.getMonth()===11 && year.getDate()>25)
     {
        cmas.setFullYear(cmas.getFullYear()+1);
     }
     let one_day = 1000*60*60*24 ;
     let diff =  cmas.getTime()-year.getTime()  ;
     let result = Math.ceil(diff/one_day);
    console.log("days left until next chrismas are:" + result ) ;

  // exercuice 03
    const multiplication = (x,y) =>`your result are :${Math.ceil(x*y)}`;
        multiplication(1,10)
    const division = (x,y) => (y ===0) ?"impossible de faire la division" :`votre resultat est: ${Math.ceil(x / y)}`;
    
    division (0,2)
//valide mais tu peux mieux faire 

//exple: 
// const division = (x, y) => 
//   y === 0 ? "Impossible to do a division because your second number is 0" : `Your result is: ${x / y}`;

    
   //exercice 04
     const longest_array = ( tab) =>
       {
         let max_ch =tab[0].length ;
         let stock = tab[0];
         for( let i=1; i<tab.length; i++)
         {
            if(tab[i].length> max_ch)
            {
                max_ch= tab[i].length;
                stock = tab[i]
            }
         }
         return ("votre plus logue chaine est :" +stock);
         
       }
       console.log(longest_array(["a","add","ddfs"]));

//valide
     
       //exercise 5
        const largest_even = (tab) =>
          {
            let max_even = null ;
            for (let i=0; i <tab.length; i++)
            {
                if (tab[i]%2===0 && tab[i]> max_even)
                {
                    max_even=tab[i];
                    
                }
            
            }
            return ("your max even are :" + max_even)
             
          }
          console.log(largest_even([20,40,200]));

    // exercice6
    
    const supprime_doublons =(chaine) =>
    {
        let stock="";
        for (let i=0; i<chaine.length; i++)
        {   
            if (stock.indexOf(chaine[i])=== -1)
            {
                stock=stock + chaine[i];
            }
           
        }
        //why ?
        //je retourne hors de la bourcle pour laissé la bourcle allé jusqu'a la fin et tester tout les caracteres
        return ("votre chaine la plus nlongue est :" +stock)
    }
    console.log(supprime_doublons("hellooo"));
      
     //exercice7
     //valide
       const sum_of_cube =( num) =>
        {
            let sum= null ;
            for (let i=0; i<num; i++)
            {
              sum = sum + Math.pow(i,3)  
            }
            return ("your sum are :" +sum)
        }
        console.log(sum_of_cube(3));

    // exerci8
     //valide, qu'es ce qui t'a posser a utiliser every ?
     //pour parcourir chaque cles et s'assure que toutes respectent la condition donnée
    const matchesWith = (obj, source, fn) => {
      return Object.keys(source).every(key => {
          if (!obj.hasOwnProperty(key)) {
              return false;
          }
          if (fn) {
              return fn(obj[key], source[key], key, obj, source);
          }
          return obj[key] == source[key];
      });
  }; 
    const isGreeting = val => /^h(?:i|ello)$/.test(val);
    
    console.log(matchesWith(
      { greeting: 'hello' },
      { greeting: 'hi' },
      (oV, sV) => isGreeting(oV) && isGreeting(sV)
    ));

    //exercice9
//le but de l'exercice c'est quoi ? 
// elle permet de supprimé les elements d'un tableau a un endroit specifiques et retournes le tableau sans les nombres supprimés
    function remove (arr, ...args)
      {
        let argState =Array.isArray(args[0]) ? args[0] :args;// verifi si le 1e element est un tbleau ou non
        let pulled = arr.filter((v, i) => !argState.includes(v));// filtre les element qui ne sont pas dans argstate
        arr.length=0;//vider le tableau original
        pulled.forEach(v => arr.push(v)); // Remplir arr avec les element restants de pulled

        return pulled ;
      }
      let arr =['a','d','s','b','d'];
      console.log(remove(arr,'a','b')) ;

      //exercice 10
//le nom de ta fonction doit etre explicite (confee regle de clean code ) 
      const remove_and_index = (tab, indice) => {
        let removed = [];
        let pulled = tab
          .map((v, i) => (indice.includes(i) ? removed.push(v) : v))
          .filter((v, i) => !indice.includes(i));
        tab.length = 0;
        pulled.forEach(v => tab.push(v));
        return removed;
      };
      let arra1 = ['a', 'b', 'c', 'd', 'e', 'f'];
      console.log(pull_at_Index(arra1, [1,0, 3]));

      //exercice11
      let student ={
        name: "david Ray",
        sclass : "VI" ,
        rallno : 12 ,
      };
      console.log(student);
      delete student.rallno ;
      console.log(student);
      
      
      //exercice12
       
      const calcule_volume_of_cylindre =(r,h) =>
      ` your volume are:${Math.ceil(2*(Math.PI*Math.pow(r,2)*h))} `
         
         console.log(calcule_volume_of_cylindre(2,4))

  //exercice 13
//pas la bonne aproche 
//nouelle methode avec les classes
function  my_Clock () 
    { 
       this.today= new Date();
       this.heure = today.getHours();
      this.minute = today.getMinutes() ;
      this.seconde = today.getSeconds() ;
    }
    my_Clock.prototype.run =() =>setInterval(this.update.bind(this),1000);
    my_Clock.prototype.update = function (){
      this.updateTime(1)
      console.log(this.hours + ":" + this.minutes + ":" + this.seconds);
    }
    my_Clock.prototype.updateTime = function (secs)
    {
      if (this.seconde >=60)
      {
        this.minute ++ ;
        this.seconde =0 ;
      }
        if (this.minute >=60)
        {
         this.heure ++ ;
          this.minute = 0 ;
        }
          if (this.heure >=24)
          {
            this.heure = 0;
          }
    } ;
let clock = new my_Clock();
clock.run();  
  //exercice 14
//valide 
  const inLowerCase = ( chaine) =>(chaine===chaine.toLowerCase())?" your string in lower case ":"your string is not a lower case";
    console.log(inLowerCase("junior")) ;

    //exercice 15

//utilise une autre aproche 

    const add = (x,y) =>(x===0 && y===0)?"Must provide two parameters" :"you have two parameter";
      console.log(add());
      
