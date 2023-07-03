function getfileName(date = new Date()){
    return `${date.getDate()}-${date.getMonth()+1}-${date.getFullYear()}-${date.getHours()}-${date.getMinutes()}.txt`;
}

module.exports = {
    getfileName
};