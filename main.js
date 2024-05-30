
    

const employees = [
    {
        id: 1,
        name: 'Farman',
        age: 22,
        position: 'Frontend | Team Leader',
        salary: 250
    },
    {
        id: 2,
        name: 'Subhan',
        age: 22,
        position: 'Backend | Team Leader',
        salary: 250
    },
    {
        id: 3,
        name: 'Aqil',
        age: 27,
        position: 'QA Tester',
        salary: 70
    },
    {
        id: 4,
        name: 'Lala',
        age: 18,
        position: 'QA Tester',
        salary: 70
    },
    {
        id: 5,
        name: 'Oktay',
        age: 12,
        position: 'Frontend',
        salary: 160
    },
]
// 1.Arrayin uzunluğun tapmaq
// console.log(employees.length);
// 2.At funksiyası ilə sonuncu elementin adını tapmaq
// console.log(employees.at(-1).name);

// 3.Length ilə sonuncu elementin adını tapmaq
// console.log(employees[employees.length-1].name);
// 4.Arrayin sonuna yeni işçi əlavə etmək
//     const count=employees.push('id:6,name:Aydan,age:23, position:teacher,salary:1500' )
// console.log(employees);
// 5.Arrayin əvvəlinə yeni işçi əlavə etmək

 
//  const count=employees.unshift(('id:6,name:Aydan,age:23, position:teacher,salary:1500'))
// console.log(employees);
// 6.Arrayin sonundan işçi silmək
// const last=employess.pop()
// console.log(employees);
// 7.Arrayin əvvəlindəb işçi silmək.
// console.log(employees.shift());
// 8.İşçilərin adlarını join ilə yazdırmaq (Çətin).
    // console.log(employees[employees.join].name);


// 9.Arrayi tərsinə yazdırmaq
// console.log(employees.reverse());
// 10.İşçilərin içində vəzifəsi Frontend olan varmı(includes methodu ilə)
// let content='Frontend'
// let hasContent=employees.includes((content))
// console.log(hasContent);
// let Frontend=employees.some(employee=>employee.position.includes("Frontend"))
// console.log(Frontend);
// 11.İşçilərin içində vəzifəsi Frontend olan varmı(some methodu ilə)
// const some=employees.some("Frontend")
// console.log(some);
// let content='Frontend'
// let hasContent=employees.some((Frontend)=>Frontend)
// console.log(hasContent);
// 12.Bütün işçilərin yaşı 18dən böyükdürmü
// console.log(employees.every(x=>x>18));
// 13.Vəzifəsi Frontend | Team Leader olan işçinin indexini tapmaq
// const index=employees.findIndex((position)=>'Frontend | Team Leader olan')
// console.log(index);
// 14.Vəzifəsi Frontend | Team Leader olan işçinin özünü tapmaq
// const user=employees.find(
//     (employee)=>employee.position==='Frontend | Team Leader' )
// {

//     console.log(user);
// }
// 15.Yaşı 18dən böyük olan işçiləri göstərmək
// const map=employees.map(({name,age})=>({[age>18]:name}) )
// {
// console.log(map);
// }
// 16.İşçilərin maaşlarının cəmin hesablamaq
// const totalSalary=employees.map((employee)=>employee.salary).reduce((a,b)=>a+b,0);
// console.log(totalSalary);




