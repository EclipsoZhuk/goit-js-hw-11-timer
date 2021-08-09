const refs = {
    timer: document.querySelector('#timer-1'),
    days: document.querySelector('[data-value="days"]'),
    hours: document.querySelector('[data-value="hours"]'),
    minutes: document.querySelector('[data-value="mins"]'),
    seconds: document.querySelector('[data-value="secs"]'),
};

class CountdownTimer {
    constructor({ selector, targetDate }) {
        this.selector = selector;
        this.targetDate = targetDate;
    }

    setInt = setInterval(() => {
        const currentTime = Date.now();
        const newTime = this.targetDate - currentTime;
        this.getTimeComponents(newTime);
        this.updateTimer(newTime);
    }, 1000);

    pad(value) {
        return String(value).padStart(2, '0');
    }

    getTimeComponents(time) {
        const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
        const hours = this.pad(
            Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        );
        const mins = this.pad(
            Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)),
        );
        const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

        refs.days.textContent = `${days}`;
        refs.hours.textContent = `${hours}`;
        refs.minutes.textContent = `${mins}`;
        refs.seconds.textContent = `${secs}`;
    }

    updateTimer(time) {
        if (time < 0) {
            refs.timer.style.cssText = `color: orange;
                                margin-top: 100px;
                                font-size: 100px;
                                text-align: center;
                                    `;
            refs.timer.textContent = 'Time is up!';
        }
    }
}

const newTimer = new CountdownTimer({
    selector: '#timer-1',
    targetDate: new Date('Aug 17, 2021'),
});
