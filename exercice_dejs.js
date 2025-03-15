// stp utilise les arrow fonction pour toutes les foncions 
//exercise 01

function guessNumber(numb)
    {
        let varAleatoire = Math.floor(Math.random()*10)+1;
        console.log(varAleatoire);
        if (numb===varAleatoire)
        {
            return "Good work"
        } 
        else
        {return "Not matched"} 

    }
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
    function multiplication(x,y)
        {
            console.log("your result are:"+ (x*y)); 
            return;
        }
        multiplication(1,10)
    function division (x,y)
    {
        if (y === 0)
        { 
            console.log("impossible to do a division because your second number equal to 0")
            return
        }
        console.log ( "your result are:" + (x/y));
        return
    }
    division (0,2)
//valide mais tu peux mieux faire 

//exple: 
// const division = (x, y) => 
//   y === 0 ? "Impossible to do a division because your second number is 0" : `Your result is: ${x / y}`;

    
   //exercice 04
     function longest_array ( tab)
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
        function largest_even (tab)
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
    
    function supprime_doublons (chaine)
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
        return ("votre chaine la plus nlongue est :" +stock)
    }
    console.log(supprime_doublons("hellooo"));
      
     //exercice7
     //valide
       function sum_of_cube( num)
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
    function remove (arr, ...args)
      {
        let argState =Array.isArray(args[0]) ? args[0] :args;// erifi si le 1e element est un tbleau ou non
        let pulled = arr.filter((v, i) => !argState.includes(v));// filtre les element qui ne sont pas dans argstate
        arr.length=0;//vider le tableau original
        pulled.forEach(v => arr.push(v)); // Remplir arr avec les element restants de pulled

        return pulled ;
      }
      let arr =['a','d','s','b','d'];
      console.log(remove(arr,'a','b')) ;

      //exercice 10
//le nom de ta fonction doit etre explicite (confee regle de clean code ) 
      const pull_at_Index = (tab, indice) => {
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
       
      function calcule_volume_of_cylindre (r,h)
         {
          let volume = Math.ceil(2*(Math.PI*Math.pow(r,2)*h)) ;
          return ( "your volume are:"+volume )
         }
         console.log(calcule_volume_of_cylindre(2,4))

  //exercice 13
//pas la bonne aproche 
      let today= new Date();

      let heure = today.getHours();
      let minute = today.getMinutes() ;
      let seconde = today.getSeconds() ;
  function  Clock ()
    {
      if (seconde >=60)
      {
        minute ++ ;
        seconde =0 ;
      }
        if (minute >=60)
        {
          heure ++ ;
          minute = 0 ;
        }
          if (heure >=24)
          {
            heure = 0;
          }
          console.log(`${heure}:${minute}:${seconde}`);

    } 
    setInterval(clock(),1000)
  
  //exercice 14
//valide 
  function inLowerCase ( chaine)
    {
      if (chaine===chaine.toLowerCase())
        {
          return(" your string in lower case ");
        }
     else 
     {
      return ("your string is not a lower case");
     }
    }
    console.log(inLowerCase("junior")) ;

    //exercice 15

//utilise une autre aproche 

    function add (x,y)
      {
        if (x ===undefined || y===undefined)
          return ("Must provide two parameters")
      }
      console.log(add());
      
