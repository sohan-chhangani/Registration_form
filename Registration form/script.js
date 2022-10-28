var selectedRow = null;

function onformSubmit() {
    if (validate()) {
        var formData = readFormData();
        console.log(formData)
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData)

        resetForm();
    }
}

function readFormData() {
    var formData = {};
    formData["fullName"] = document.getElementById("fullName").value;
    formData["telefone"] = document.getElementById("telefone").value;
    formData["Sexo"] = document.getElementById("Sexo").value;
    formData["cidade"] = document.getElementById("cidade").value;
    formData["email"] = document.getElementById("email").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.fullName;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.telefone;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.Sexo;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.cidade;
    cell5 = newRow.insertCell(4)
    cell5.innerHTML = data.email;
    cell6 = newRow.insertCell(5);
    cell6.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                     <a onClick="onDelete(this)">Delete</a>`;
}

function resetForm() {
    document.getElementById("fullName").value = "";
    document.getElementById("telefone").value = "";
    document.getElementById("Sexo").value = "";
    document.getElementById("cidade").value = "";
    document.getElementById("email").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("fullName").value = selectedRow.cells[0].innerHTML;
    document.getElementById("telefone").value = selectedRow.cells[1].innerHTML;
    document.getElementById("Sexo").value = selectedRow.cells[2].innerHTML;
    document.getElementById("cidade").value = selectedRow.cells[3].innerHTML;
    document.getElementById("email").value = selectedRow.cells[4].innerHTML;
}

function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.fullName;
    selectedRow.cells[1].innerHTML = formData.telefone;
    selectedRow.cells[2].innerHTML = formData.Sexo;
    selectedRow.cells[3].innerHTML = formData.cidade;
    selectedRow.cells[4].innerHTML = formData.email;
}

function onDelete(td) {
    if (confirm("Are you sure you want to delete this Entry?")) {
        row = td.parentElement.parentElement;
        document.getElementById("employeeList").deleteRow(row.rowIndex);
        resetForm();
    }
}

function validate() {
    var isValid = true;
    if (document.getElementById("fullName").value == "") {
        isValid = false;
        document.getElementById("fullNameValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("fullNameValidationError").classList.contains("hide"))
            document.getElementById("fullNameValidationError").classList.add("hide");
    }
    return isValid;
}

function mascara(telefone) {
    if (telefone.value.length == 0)
        telefone.value = '(+' + telefone.value;
    if (telefone.value.length == 4)
        telefone.value = telefone.value + ') ';
    if (telefone.value.length == 6)
        telefone.value = telefone.value + '-';
    if (telefone.value.length == 12)
        telefone.value = telefone.value + '-';

}