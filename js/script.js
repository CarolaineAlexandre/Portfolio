const alertList = document.querySelectorAll('.alert')
const alerts = [...alertList].map(element => new bootstrap.Alert(element))

const bsAlert = new bootstrap.Alert('#myAlert')

const myAlert = document.getElementById('myAlert')
myAlert.addEventListener('closed.bs.alert', event => {

})

