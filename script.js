function readFormData() {
    var formData = {};
    var form = document.getElementById("studentForm");
    formData.name = form.elements["name"].value;
    formData.roll = form.elements["roll"].value;
    formData.class = form.elements["class"].value;
    formData.domain = form.elements["domain"].value;
    return formData;
}

function saveFormData(formData) {
    localStorage.setItem("studentData", JSON.stringify(formData));
}

function displayFormData() {
    var formData = JSON.parse(localStorage.getItem("studentData"));
    if (formData) {
        var tableBody = document.getElementById("studentTableBody");
        var newRow = tableBody.insertRow();
        newRow.innerHTML = "<td>" + formData.name + "</td><td>" + formData.roll + "</td><td>" + formData.class + "</td><td>" + formData.domain + "</td>";
    }
}


function submitForm() {
    var formData = readFormData();
    saveFormData(formData);
    window.location.href = "student-details.html";
}
