const data = require("./Database")
const print = document.querySelector(".employee")
const frag = document.createDocumentFragment()



const build = () => {
    const empComp = data.employeeComputers
    const emp = data.employees
    const dept = data.departments
    const comp = data.computers
    console.log(empComp)


    console.log(dept)
    console.log(emp)
    emp.forEach(employee => {
    console.log("Test")
    //Header with Employee Name
    const filteredDept = dept.filter(currentDept => currentDept.departmentId === employee.departmentId)
    console.log("Filtered Dpt" , filteredDept)
    const filteredEmpComp = empComp.filter(CurrentempComp => CurrentempComp.employeeId === employee.employeeId)
    console.log(filteredEmpComp)
    const header = document.createElement("header")
    const h1Name = document.createElement("h1")
    header.classList = "employee_name"
    h1Name.textContent = `${employee.firstName} ${employee.lastName}`
    header.appendChild(h1Name)
    frag.appendChild(header)

    // Section with Employee Department
    const sectionDept = document.createElement("section")
    sectionDept.classList = "employee_department"
    sectionDept.textContent = `Employee works in the
    ${filteredDept[0].name} department.`
    frag.appendChild(sectionDept)

    // Section with Employee Computer
    const sectionComp = document.createElement("section")
    sectionComp.classList = "employee_computer"
        filteredEmpComp.forEach(currentEmpComp => {
            let computers = comp.find(currentComputer => currentComputer.computerId === currentEmpComp.computerId)
            console.log(computers)
            sectionComp.textContent = `Currently they are using a ${computers.name}`
            frag.appendChild(sectionComp)
        })
    })
    print.appendChild(frag)
}

module.exports = build