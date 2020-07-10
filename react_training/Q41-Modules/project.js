/**
 * 41. Define Project and Employee classes in separate modules (as default exports in those modules). Create another module that 
 * creates an array of projects, and an array of employee objects, and exports these (as named exports). Create an HTML page that
 * imports projects and employees and shows the list of projects and employees in 2 separate tables.

 */

export class Project{
    constructor(id,name,client){
        this.id=id;
        this.name=name;
        this.client=client;
    }

}