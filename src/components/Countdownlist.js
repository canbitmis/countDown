import React, { useState, useEffect } from 'react'

function Countdownlist({ setCountDown }) {
    const [time, setTime] = useState("");
    useEffect(() => {
        let countDownDate = new Date("Aug 23, 2021 08:59:00").getTime();
        //Her saniye güncellenir
        let x = setInterval(function () {
            //Gün ve Zamanı Bağlar
            let now = new Date().getTime();

            //Şuan ile geri sayım arasındaki zamanı ayarlar
            let distance = countDownDate - now;

            let days = Math.floor(distance / (1000 * 60 * 60 * 24));
            let hours = Math.floor(
                (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
            );
            let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            let seconds = Math.floor((distance % (1000 * 60)) / 1000);

            setTime(days + "Gün " + hours + "Saat " + minutes + "Dakika " + seconds + "Saniye ")
            if (distance < 0) {
                clearInterval(x);
                setTime("Merhaba")
                setCountDown(true)
                setTimeout(() => {
                    setCountDown(false)


                }, 15000);
            }

        }, 1000);

    }, []);


    return <div style={style}>{time}</div>;

}
const style = {
    fontSize: "150px",
    textAlign: "center",
};

export default Countdownlist
