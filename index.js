function getStudents()
{
    fetch('https://trainingapi-5y1t.onrender.com/students')
      .then(response => response.json())
      .then(json => console.log(json))
}

getStudents();