const calculateForm = document.getElementById('calculate-form');
const calculateCm = document.getElementById('calculate-cm');
const calculateKg = document.getElementById('calculate-kg'); // Corrected variable name
const calculateMessage = document.getElementById('calculate-message');

const calculateBmi = (e) => {
    e.preventDefault();

    // Check if the fields have a value
    if (calculateCm.value === '' || calculateKg.value === '') {
        calculateMessage.classList.remove('color-green');
        calculateMessage.classList.add('color-red');

        calculateMessage.textContent = 'Fill in the Height and Weight';
        setTimeout(() => {
            calculateMessage.textContent = '';
        }, 3000);
    } else {
        // BMI formula
        const cm = calculateCm.value / 100;
        const kg = calculateKg.value;
        const bmi = Math.round(kg / (cm * cm));

        // Show your health status
        if (bmi < 18.5) {
            // Add color and display message
            calculateMessage.classList.add('color-green');
            calculateMessage.textContent = `Your BMI is ${bmi} and you are skinny (you are in underweight range , so you need to gain your weight)`;
        }else if(bmi<25){
            calculateMessage.classList.add('color-green');
            calculateMessage.textContent = `Your BMI is ${bmi} and you are healthy (you are in healthyweight range but you need to gain your mussels)`;

        }else{
            calculateMessage.classList.add('color-green');
            calculateMessage.textContent = `Your BMI is ${bmi} and you are in overweight range so you need to loss your weight`;
        }
    }
}

calculateForm.addEventListener('submit', calculateBmi);
