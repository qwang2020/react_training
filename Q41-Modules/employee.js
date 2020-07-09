import {Project} from './project.js';
export class Employee{
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