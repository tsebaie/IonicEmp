export class con{

    name: string;
    surname: string;
    idno: string;
    role: string;
    empimage: string;
    username: string;
    password: string;
  
    constructor(name: string, surname: string, idno: string, role: string, empimage: string, username: string,
        password: string) {
        this.name = name;
        this.surname = surname;
        this.idno = idno;
        this.role = role;
        this.empimage= empimage;
        this.username=username;
        this.password=password;
    }
  }