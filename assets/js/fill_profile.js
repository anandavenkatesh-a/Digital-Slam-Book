

const Department = document.querySelector('select[name="dept"]');
const Hostel = document.querySelector('select[name="hostel"]');

nitt_hostels.forEach((hostel) => {
    let hostel_option;
    if(Hostel.getAttribute('data-value') == hostel)
    {
        hostel_option = `<option value="${hostel}" selected>${hostel}</option>`;
    }
    else
    {
        hostel_option = `<option value="${hostel}">${hostel}</option>`;
    }
    Hostel.innerHTML += hostel_option;
});
nitt_depts.forEach((dept) =>{
    let dept_option;
    if(Department.getAttribute('data-value') == dept)
    {
        dept_option = `<option value="${dept}" selected>${dept}</option>`;
    }
    else
    {
        dept_option = `<option value="${dept}">${dept}</option>`;
    }
    Department.innerHTML += dept_option;
});
