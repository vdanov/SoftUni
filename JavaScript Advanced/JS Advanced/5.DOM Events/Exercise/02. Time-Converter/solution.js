function attachEventsListeners() {

    Array.from(document.querySelectorAll('input[type="button"]')).
        forEach(button => button.addEventListener('click', function (e) {
            let currentTextField = e.target.parentNode.querySelector('input[type="text"]');
            let buttonType = button.id;

            //24 hours/1440 minutes/86400 seconds.

            let time = {
                hours: 24,
                minutes: 1440,
                seconds: 86400
            };

            let convertedDays = 0;
            let convertedHours = 0;
            let convertedMinutes = 0;
            let convertedSeconds = 0;

            switch (buttonType) {
                case 'daysBtn':
                    convertedDays = currentTextField.value;
                    convertedHours = currentTextField.value * time.hours;
                    convertedMinutes = currentTextField.value * time.minutes;
                    convertedSeconds = currentTextField.value * time.seconds;
                    break;
                case 'hoursBtn':
                    convertedDays = currentTextField.value / time.hours;
                    convertedHours = currentTextField.value;
                    convertedMinutes = (currentTextField.value * time.minutes) / time.hours;
                    convertedSeconds = (currentTextField.value * time.seconds) / time.hours;
                    break;
                case 'minutesBtn':
                    convertedDays = currentTextField.value / time.minutes;
                    convertedHours = (currentTextField.value / time.minutes) * time.hours;
                    convertedMinutes = currentTextField.value;
                    convertedSeconds = (currentTextField.value * time.seconds) / time.minutes;
                    break;
                case 'secondsBtn':
                    convertedDays = currentTextField.value / time.seconds;
                    convertedHours = (currentTextField.value * time.hours) / time.seconds;
                    convertedMinutes = (currentTextField.value * time.minutes) / time.seconds;
                    convertedSeconds = currentTextField.value;
                    break;
            };

            let allInputFields = Array.from(document.querySelectorAll('input[type="text"]'));

            allInputFields.map(field => {
                if (field.id == 'days') {
                    field.value = convertedDays;
                } else if (field.id == 'hours') {
                    field.value = convertedHours;
                } else if (field.id == 'minutes') {
                    field.value = convertedMinutes;
                } else if (field.id == 'seconds') {
                    field.value = convertedSeconds;
                }
            })
        }));
};