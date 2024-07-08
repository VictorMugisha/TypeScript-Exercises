namespace MappedTypes {

    type CompanyEmployee = {
        name: string
        age: number
        role: string
        salary: number
    }
    
    // If we wanted other type to create new employee we would do this
    type MapperType<Type> = {
        [Property in keyof Type as `setEmployee${Capitalize<string & Property>}`]: (prop: Type[Property]) => Type[Property]
    }
    
    type CreateEmployee = MapperType<CompanyEmployee>
    
    // type CreateEmployee = {
    //     setEmployeeName: (prop: string) => string;
    //     setEmployeeAge: (prop: number) => number;
    //     setEmployeeRole: (prop: string) => string;
    //     setEmployeeSalary: (prop: number) => number;
    // }
    


}