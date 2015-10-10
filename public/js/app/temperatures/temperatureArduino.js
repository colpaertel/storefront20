var five = require("johnny-five"),
    onButton;


five.Board().on("ready", function() {

    // =================== BUTTON INIT ================ //

    onButton = new five.Button({
        pin: 4,
        isPullup: true
    });
    var isPressed = false;

// =================== LCD INIT =================== //

    var lcd = new five.LCD({
        controller: "JHD1313M1",
        rows: 2,
        columns: 16
    });
    lcd.clear();


    // =================== Temperature INIT ============== //

    var temp = new five.Temperature({
        pin: "A0",
        controller: "GROVE"
    });

    var c = 0;

    temp.on("data", function() {

        c = Math.floor(this.celsius);
        if (c<22){
            lcd.bgColor(135, 206, 235).cursor(0, 0).print("T: " +c+" C"); // blue color
            lcd.bgColor(135, 206, 235).cursor(1, 0).print("Winter time !"); // blue color
        }
        else {
            lcd.bgColor(255, 69, 0).cursor(0, 0).print("T: " +c+" C"); // orange red color
            lcd.bgColor(255, 69, 0).cursor(1, 0).print("Summer time !"); // blue color
        }

    });

    // =================== LAUNCH PURCHASE =================== //
    onButton.on("up", function(value){
        console.log("Pressed : " + !five.buttonState);
        console.log("c : " + c);
        if (c<22){
            console.log("c : c<22");
            console.log("BUY! Winter");
        }
        else {
            console.log("c : c>22 ");
            console.log("BUY! Summer");
        }
    });

});
