function kmtoMetres(km){
    return km * 1000;
}
function metrestoKm(m){
    return m / 1000;
}
function kmtoMiles(km){
    return km * 0.621371;
}
function milestoKm(miles){
    return miles / 0.621371;
}
function metrestoMiles(m){
    return m * 0.000621371;
}
function milestoMetres(miles){
    return miles / 0.000621371;
}

function convertUnits(value, fromUnit, toUnit) {
    if (fromUnit === toUnit) {
        return value;
    }
    switch (fromUnit) {
        case 'kilometers':
            if (toUnit === 'meters') return kmtoMetres(value);
            if (toUnit === 'miles') return kmtoMiles(value);
            break;
        case 'meters':
            if (toUnit === 'kilometers') return metrestoKm(value);
            if (toUnit === 'miles') return metrestoMiles(value);
            break;
        case 'miles':
            if (toUnit === 'kilometers') return milestoKm(value);
            if (toUnit === 'meters') return milestoMetres(value);
            break;
    }
    throw new Error('Unsupported conversion');
}
function handleConversion() {
    const fromUnit = document.getElementById('fromUnit').value;
    const toUnit = document.getElementById('toUnit').value;
    const inputValue = parseFloat(document.getElementById('inputValue').value);
    
    if (isNaN(inputValue)) {
        alert('Please enter a valid number');
        return;
    }
    
    try {
        const result = convertUnits(inputValue, fromUnit, toUnit);
        document.getElementById('result').textContent = `Converted Value: ${result} ${toUnit}`;
    } catch (error) {
        alert(error.message);
    }
}
