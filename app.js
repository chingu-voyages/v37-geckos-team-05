const passedDate = document.querySelector('.passed-date')
const createDate = document.getElementById('createDate')


function changeDate() {
    const currentVal = createDate.value
    const today = new Date();
    const difference = today.getTime() - new Date(currentVal).getTime();
    const days = Math.ceil(difference / (1000 * 3600 * 24));
    passedDate.textContent = `Passed ${days} days`
}









