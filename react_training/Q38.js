/*
38. Create a Movie class that represents details of a movie. Suggested information to have in an object of the class - name, 
cast (an array of strings with cast member's names), yearOfRelease, boxOfficeCollection, addToCast( newMember ) that accepts
 a new cast member's name and adds to the cast array, addToCollection( amount ) that accepts box office collections for a week 
 and adds it to the current boxOfficeCollection. Create 2 objects of this class that represent any 2 movies. Call the methods 
 addToCast() and addToCollection() and verify they work according to expectations.

38b. Create a SequelMovie class that inherits from Movie class. SequelMovie has an additional property called earlierMovies 
- an array of Movie objects. It has an additional method called getLifetimeEarnings() that returns the sum of boxOfficeCollection 
of all earlier movies along with the SequelMovie object's boxOfficeCollection.
*/
class movie{
    constructor(name,year,collection,...cast){
        this.name = name;
        this.yearOfRelease = year;
        this.boxOfficeCollection = collection; // in million
       // this.cast = new Array();
        this.cast = cast;

    } 
   /* addToCast(newCast)
    { 
        this.cast.push(newCast);    
    } */
    addToCast=(newCast)=> this.cast.push(newCast);        
    addToCollection=(amount)=>this.boxOfficeCollection += amount;

}
// Q38 Test case
// The Mask
movie1 = new movie('Terminator',1984,78.3,'Arnold Schwarzenegger');
movie1.addToCast('Linda Hamilton');
movie1.addToCollection(1);
// The Truman Show
movie2 = new movie('Terminator 2: Judgment Day',1991,520.8,'Arnold Schwarzenegger','Linda Hamilton');

//console.log(movie1);
//console.log(movie2);

class SequelMovie extends movie{
    constructor(sequelMovie,name,year,collection,...cast){
        super(name,year,collection,cast);
        this.sequelMovie = sequelMovie;
    }
    getLifetimeEarnings()
    {
        let TotalEarning=this.boxOfficeCollection;
        this.sequelMovie.forEach(element => { TotalEarning +=element.boxOfficeCollection;   });
        return TotalEarning;
    }
}
let moviearr = new Array();
moviearr.push(movie1);
moviearr.push(movie2);
TerminatorSequel = new SequelMovie(moviearr,'Terminator 3: Rise of the Machines',2003,433.4,'Arnold Schwarzenegger','Claire Danes');
console.log(TerminatorSequel);
console.log(`total collection: ${TerminatorSequel.getLifetimeEarnings()} million`);