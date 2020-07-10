/*
40. Define an Employee class with id (number), name (string), role (string), department (string), projects (array of Projects). Define some Employee objects (suggest using sample data below).  
```
const john = new Employee( 1, 'John', 'Web Developer', 'IT', [ dbsPayroll ] );
const jane = new Employee( 2, 'Jane', 'Project Manager', 'IT', [ dbsPayroll, intranetDeployment ] );
const mark = new Employee( 3, 'Mark', 'System Administrator', 'Operations', [ intranetDeployment ] );
```  

*/
class Project{
    constructor(id,name,client){
        this.id=id;
        this.name=name;
        this.client=client;
    }

}
const dbsPayroll = new Project( 1001, 'DBS payroll', 'DBS' );
const intranetDeployment = new Project( 2001, 'Intranet v2 deployment', 'Internal' );

class Employee{
    constructor(id,name,role,department,...projects){
        this.id=id;
        this.name=name;
        this.department=department;
        this.projects = projects;
    }
    //
    printPrj=()=>{
        console.log(`Employee Name: ${this.name}`);
        console.log(`           id: ${this.id}`);
        console.log(`   Department: ${this.department}`);
        console.log(`${this.name} 's projectrs:`);
        this.projects.forEach((prj)=>{console.log(prj);});
    }
}
const john = new Employee( 1, 'John', 'Web Developer', 'IT', [ dbsPayroll ] );
const jane = new Employee( 2, 'Jane', 'Project Manager', 'IT', [ dbsPayroll, intranetDeployment ] );
const mark = new Employee( 3, 'Mark', 'System Administrator', 'Operations', [ intranetDeployment ] );
// print out test
john.printPrj();
jane.printPrj();
mark.printPrj();