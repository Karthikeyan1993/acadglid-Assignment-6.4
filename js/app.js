var Employees=[];
Employees=[
{
  name:'Karthikeyan.K',
  age:24,
  salary:40000,
  address:{city:'Pune',state:'Maharashtra',pincode:411015}
},{
  name:'Johnkennady Vincent',
  age:26,
  salary:30000,
  address:{city:'Pune',state:'Maharashtra',pincode:411015}
},{

  name:'Antony Raj',
  age:27,
  salary:40000,
  address:{city:'Pune',state:'Maharashtra',pincode:411015}
},{

  name:'SatheeshKumar',
  age:24,
  salary:35000,
  address:{city:'Pune',state:'Maharashtra',pincode:411015}
},{
  name:'Prem',
  age:23,
  salary:30000,
  address:{city:'Pune',state:'Maharashtra',pincode:411015}
}
];

for (ele in Employees) {
  console.log('Employee '+ele);
  console.log('Employee Name :'+Employees[ele].name);
  console.log('Employee Age :'+Employees[ele].age);
  console.log('Employee Salary :'+Employees[ele].salary);
  console.log('Employee Address');
  console.log('Employee City :'+Employees[ele].address.city)
  console.log('Employee State :'+Employees[ele].address.state);
  console.log('Employee Pinecode :'+Employees[ele].address.pincode);
}
