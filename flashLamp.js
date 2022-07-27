class FlashLamp {
    battery
    constructor(battery){
        this.battery = battery
    }
    getBatteryInfo(){
        return this.battery.getEnery()
    }
    light(){
        if(this.status){
            alert('Lighting')
        }
        else
        {
            alert('Not lighting')
        }
    }
    turnOn(){
        this.status = true
    }
    turnOff(){
        this.status = false
    }
}